import { error, json } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function GET({ cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);

    const remove = db.sql`
        INSERT INTO friends(username1, username2, accepted)
        VALUES (${user},${user},false);
    `.all();
    return new Response();
}
