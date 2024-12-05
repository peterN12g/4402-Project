import { error } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function DELETE({ request, cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);
    const data = await request.json();
    const user2 = data.username;
    if (user2 === undefined) error(401);

    await db.sql`
        DELETE FROM friends
    WHERE (username1 = ${user} AND username2 = ${user2} OR username1 = ${user2} AND username2 = ${user}) AND accepted = true    
    
    `.run();
    return new Response();
}
