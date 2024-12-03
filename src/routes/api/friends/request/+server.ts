import { error, json } from '@sveltejs/kit';
import { db, userFromCookies } from '$lib/server';
import sql from "sql-template-tag";

export async function GET({ cookies }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);

    const remove = await db.all(sql`
        INSERT INTO friends(username1, username2, accepted)
        VALUES (${user},${user},false);
        `
    );
        return new Response();
}
