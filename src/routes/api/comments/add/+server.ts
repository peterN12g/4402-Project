import { error } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function POST({ request, cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);
    const { text } = await request.json();
    if (text === '') { throw error(401, 'need message');}

    db.sql`
        INSERT INTO posts (username, text) 
        VALUES (${user}, ${text});
    `.run();
        
    return new Response();
}