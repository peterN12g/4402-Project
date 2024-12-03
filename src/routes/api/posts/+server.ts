import { error, json } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function GET({ cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);

    const posts = db.sql`
        WITH
            my_friends AS (
                SELECT friends.username1 AS username
                FROM friends
                WHERE friends.accepted AND friends.username2 = ${user}
                UNION ALL
                SELECT friends.username2 AS username
                FROM friends
                WHERE friends.accepted AND friends.username1 = ${user}
            ),
            visible_posts AS (
                SELECT posts.*
                FROM posts, my_friends
                WHERE posts.username = my_friends.username OR posts.username = ${user}
            )
        SELECT
            visible_posts.*,
            COUNT(DISTINCT post_likes.username) AS likes,
            COUNT(DISTINCT comments.id) AS comments
        FROM visible_posts, post_likes, comments
        WHERE visible_posts.id = post_likes.post_id AND visible_posts.id = comments.post_id
        GROUP BY visible_posts.id
    `.all();
    
    return json(posts);
}
