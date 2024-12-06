import { error } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

type Post = {
    id: number,
    username: string,
    description: string,
    likes: number;
    authorized: boolean,
}

type Comment = {
    id: number,
    post_id: number,
    username: string,
    text: string,
    likes: number,
}

export async function load({ cookies, params }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);

    return db.transact(() => {
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
                (SELECT COUNT(*) FROM post_likes WHERE posts.id = post_likes.post_id) AS likes,
                (SELECT posts.username = ${user} OR posts.username IN my_friends) as authorized
            FROM posts
            WHERE posts.id = ${params.id}
        `.get() as Post;

        console.log(post)

        if (post === undefined) error(404);
        if (!post.authorized) error(401);

        const isAuthor = post.username === user;

        const comments = db.sql`
            SELECT comments.*, COUNT(comment_likes.username) AS likes
            FROM comments
            LEFT JOIN comment_likes ON comment_likes.comment_id = comments.id
            WHERE comments.post_id = ${post.id}
            GROUP BY comments.id
        `.all() as Comment[];

        return { post, isAuthor, comments };
    });
}

export const actions = {
	default: async ({ cookies, request, params }) => {
        const user = await userFromCookies(cookies);
        if (user === undefined) error(401);

        const data = await request.formData();
        const text = data.get("description");
        if (typeof text !== "string") error(400);
        const postId = params.id;
    
        db.sql`
            INSERT INTO comments (post_id, username, text) 
            VALUES (${postId}, ${user}, ${text});
        `.run();
    }
};
