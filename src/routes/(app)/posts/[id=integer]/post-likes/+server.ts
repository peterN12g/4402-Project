import { db, userFromCookies } from "$lib/server";
import { error } from "@sveltejs/kit";

export async function POST({ cookies, params }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);
    const postId = params.id;
    //check if already liked
    const existingLike = await db.sql`
        SELECT 1
        FROM post_likes
        WHERE post_id = ${postId} AND username = ${user}
        LIMIT 1
    `.get();
    //remove like
    if (existingLike) {
        await db.sql`
            DELETE FROM post_likes
            WHERE post_id = ${postId} AND username = ${user}
        `.run();
    } else {
        //like if not liked
        await db.sql`
            INSERT INTO post_likes (post_id, username)
            VALUES (${postId}, ${user})
        `.run();
    }
}
