import { error, json } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function GET({ cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);

    const friends = await db.all(`
        SELECT users.username, users.full_name FROM friends, users
        WHERE friends.username2 = ? AND users.username = friends.username1
        UNION ALL
        SELECT users.username, users.full_name FROM friends, users
        WHERE friends.username1 = ? AND users.username = friends.username2
    `, user, user);
    
    return json(friends);
}
