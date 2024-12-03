import { error, json } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';
import sql from "sql-template-tag";

export async function GET({ cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);

    const accept = await db.all(sql`
        UPDATE friends
        SET accepted = TRUE
        where username1 = ${user} AND username2 = ${user} AND accepted = FALSE;
        `);
        
        return new Response();
}
