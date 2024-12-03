import { error } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';
import sql from "sql-template-tag";

export async function POST({ request, cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);
    const { text } = await request.json();
    if (text === '') { throw error(401, 'need message');}

    await db.all(sql`
        INSERT INTO posts (username, text) 
        VALUES (${user}, ${text});
        `);
        
        return new Response();
}