import { error } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';
import sql from "sql-template-tag";

export async function POST({ request, cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);
    const { postId } = await request.json();
    if (postId === undefined) error(401);

    await db.all(sql`
        DELETE from posts 
        WHERE id = ${postId};
        `);
        
        return new Response();
}