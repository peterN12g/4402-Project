import { db, userFromCookies } from '$lib/server'
import { error } from '@sveltejs/kit';

export async function load({ cookies }) {
    const username = await userFromCookies(cookies);
    if (username === undefined) error(401);

    const row = db.sql`SELECT full_name FROM users WHERE users.username = ${username}`.get() as any;
    if (!row) error(401);

    return {
        username: username,
        fullName: row.full_name,
    }
}