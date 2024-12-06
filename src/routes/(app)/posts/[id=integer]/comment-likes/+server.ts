import { db, userFromCookies } from "$lib/server";
import { error } from "@sveltejs/kit";

export async function POST({ cookies, request }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);
    const { commentId } = await request.json();
    if (!commentId) {return error(400);
    }
    //check if already liked
    const existingLike = await db.sql`
        SELECT 1
        FROM comment_likes
        WHERE comment_id = ${commentId} AND username = ${user}
        LIMIT 1
    `.get();

    if (existingLike) {
        //remove like
        await db.sql`
            DELETE FROM comment_likes
            WHERE comment_id = ${commentId} AND username = ${user}
        `.run();
    } else {
        //like if not liked
        await db.sql`
            INSERT INTO comment_likes (comment_id, username)
            VALUES (${commentId}, ${user})
        `.run();
    }
}
