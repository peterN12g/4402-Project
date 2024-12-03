import { error } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function POST({ request, cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);
    const { description } = await request.json();
    if (description === '') { throw error(401, 'need message');}

    db.sql`
        INSERT INTO posts (username, description) 
        VALUES (${user}, ${description});
        `.run();
        
        return new Response();
}