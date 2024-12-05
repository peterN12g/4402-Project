import { error } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function POST({ cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) throw error(401, 'Unauthorized');

    await db.sql`
        UPDATE users
        SET public = false
        where username = ${user}
    `.run();
    return new Response();
}
