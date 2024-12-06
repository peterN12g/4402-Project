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
    pending: boolean;
}

type Request = {
    username: string;
    full_name: string;
    accepted: boolean;
}

export async function load ({ cookies }) {
    const user = await userFromCookies(cookies);
    if (!user) {
        throw error(401, 'Unauthorized');
    }

    return db.transact(() => {
        const friends = db.sql`
            SELECT users.username, users.full_name, friends.accepted FROM friends, users
            WHERE friends.username2 = ${user} AND users.username = friends.username1 AND friends.accepted = true
            UNION ALL
            SELECT users.username, users.full_name, friends.accepted FROM friends, users
            WHERE friends.username1 = ${user} AND users.username = friends.username2 AND friends.accepted = true
        `.all() as Friend[];
        
        const nonFriends = db.sql`
            WITH
                my_friends AS (
                    SELECT users.username FROM friends, users
                    WHERE friends.accepted AND friends.username2 = ${user} AND users.username = friends.username1
                    UNION ALL
                    SELECT users.username FROM friends, users
                    WHERE friends.accepted AND friends.username1 = ${user} AND users.username = friends.username2
                ),
                my_requests AS (
                    SELECT users.username FROM friends
                    WHERE NOT friends.accepted AND friends.username1 = ${user} AND friends.username2 = users.username
                )
            
            SELECT
                username,
                full_name,
                (SELECT username IN my_requests) AS pending
            FROM users
            WHERE username NOT IN my_friends AND username != ${user}
        `.all() as NonFriend[];

        const request = db.sql`
            SELECT users.username, users.full_name, friends.accepted FROM friends
            JOIN users ON users.username = friends.username1
            WHERE friends.username2 = ${user} AND friends.accepted = false
        `.all() as Request[];

        return { friends, nonFriends, request };
    });
};
