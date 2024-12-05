import { db, userFromCookies } from '$lib/server';
import { error } from '@sveltejs/kit';

type Post = {
    id: number,
    username: string,
    description: string,
    likes: number,
    comments: number,
}

export async function load({ cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);

    const posts = db.sql`
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
            (SELECT COUNT(*) FROM post_likes WHERE posts.id = post_likes.post_id) AS likes,
            (SELECT COUNT(*) FROM comments WHERE posts.id = comments.post_id) AS comments
        FROM posts
        WHERE posts.username IN my_friends OR posts.username = ${user}
    `.all() as Post[];
    
    return { posts };
}

export const actions = {
	default: async ({ cookies, request }) => {
        const user = await userFromCookies(cookies);
        if (user === undefined) error(401);

        const data = await request.formData();
        const description = data.get("description");
        if (typeof description !== "string") error(400);
    
        db.sql`
            INSERT INTO posts (username, description) 
            VALUES (${user}, ${description});
        `.run();
    }
};
