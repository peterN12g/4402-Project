import { error, json } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';
import sql from "sql-template-tag";

export async function GET({ cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);

    const remove = await db.all(sql`
        DELETE from friends
        where username1 = ${user} AND username2 = ${user};
        `
    );
        return new Response();
}
