import { error } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function POST({ request, cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) throw error(401, 'Unauthorized');
    const data = await request.json();
    const user2 = data.username;
    if (user2 === undefined) throw error(400, 'Bad Request');

    await db.sql`
        UPDATE friends
        SET accepted = TRUE
        WHERE (username1 = ${user} AND username2 = ${user2} OR username1 = ${user2} AND username2 = ${user})
        AND accepted = FALSE;
    `.run();
    return new Response();
}
