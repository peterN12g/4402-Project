import { error } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

type Friend = {
    username: string;
    full_name: string;
    accepted: boolean;
}

type NonFriend = {
    username: string;
    full_name: string;
}

export async function load ({ cookies }) {
    const user = await userFromCookies(cookies);
    if (!user) {
        throw error(401, 'Unauthorized');
    }

    return db.transact(() => {
        const friends = db.sql`
            SELECT users.username, users.full_name, friends.accepted FROM friends, users
            WHERE friends.username2 = ${user} AND users.username = friends.username1
            UNION ALL
            SELECT users.username, users.full_name, friends.accepted FROM friends, users
            WHERE friends.username1 = ${user} AND users.username = friends.username2
            `.all() as Friend[];
        
        const nonFriends = db.sql`
            WITH my_friends AS (
                SELECT users.username FROM friends, users
                WHERE friends.username2 = ${user} AND users.username = friends.username1
                UNION ALL
                SELECT users.username FROM friends, users
                WHERE friends.username1 = ${user} AND users.username = friends.username2
            )
            
            SELECT username, full_name FROM users
            WHERE username NOT IN my_friends AND username != ${user}
        `.all() as Friend[];

        return { friends, nonFriends };
    });
};
