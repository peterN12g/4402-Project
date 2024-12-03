import { error, json } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';

export async function GET({ cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);

    const remove = db.sql`
        DELETE from friends
        where username1 = ${user} AND username2 = ${user};
    `.all();

    return new Response();
}
