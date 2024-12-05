import { error } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function POST({ request,cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);
    const data = await request.json();
    const receiver = data.username;
    if (receiver === undefined) error(401);

    await db.sql`
    WITH friend AS (
            SELECT 1 FROM friends
            WHERE (username1 = ${user} AND username2 = ${receiver} OR username1 = ${receiver} AND username2 = ${user})
            AND accepted = TRUE
            LIMIT 1
        )
        INSERT INTO friends(username1, username2, accepted)
        SELECT ${user}, ${receiver}, false
        WHERE NOT EXISTS (SELECT 1 FROM friend);
    `.run();
    return new Response();
}
