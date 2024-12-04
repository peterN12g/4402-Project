import { error } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function load ({ cookies }) {
    const user = await userFromCookies(cookies);
    if (!user) {
        throw error(401, 'Unauthorized');
    }

    const friends = db.sql`
        SELECT users.username, users.full_name FROM friends, users
        WHERE friends.username2 = ${user} AND users.username = friends.username1
        UNION ALL
        SELECT users.username, users.full_name FROM friends, users
        WHERE friends.username1 = ${user} AND users.username = friends.username2
    `.all();
    console.log("Friends list:", friends);
    return { friends };
};

