import { db, userFromCookies } from "$lib/server";
import { error } from "@sveltejs/kit";

export async function DELETE({ cookies, params }) {
    const user = await userFromCookies(cookies);
    if (user === undefined) error(401);

    db.transact(() => {
        const { username: author } = db.sql`SELECT username FROM posts WHERE id = ${params.id}`.get() as any;
        if (author === undefined) error(404);
        if (user !== author) error(401);

        db.sql`DELETE from posts WHERE id = ${params.id}`.run();
    });

    return new Response();
}
