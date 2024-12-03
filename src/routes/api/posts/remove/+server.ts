import { error } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function POST({ request, cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);
    const { postId } = await request.json();
    if (postId === undefined) error(401);

    db.sql`
        DELETE from posts 
        WHERE id = ${postId};
    `.run();
        
    return new Response();
}