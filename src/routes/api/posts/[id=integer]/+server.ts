import { error, json } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function GET({ cookies, params }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);

    const [post, comments] = db.transact(() => {
        const post = db.sql`
            WITH my_friends AS (
                SELECT friends.username1 AS username
                FROM friends
                WHERE friends.accepted AND friends.username2 = ${user}
                UNION ALL
                SELECT friends.username2 AS username
                FROM friends
                WHERE friends.accepted AND friends.username1 = ${user}
            )
            SELECT
                posts.*,
                (SELECT posts.username = ${user} OR posts.username IN my_friends) as authorized
            FROM posts
            WHERE posts.id = ${params.id}
        `.get() as any;

        const comments = db.sql`
            SELECT *
            FROM comments
            WHERE comments.post_id = ${post.id}
        `.all() 

        return [post, comments] as const;
    });


    if (post === undefined) error(404);
    if (!post.authorized) error(401);
    return json({ post, comments });
}
