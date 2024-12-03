import { error } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function POST({ request, cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);
    const { commentId  } = await request.json();
    if (commentId  === undefined) error(401);

    db.sql`
        DELETE FROM comments
        WHERE id = ${commentId} AND username = ${user};
    `.all();
        
    return new Response();
}