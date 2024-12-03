import { createToken, db } from '$lib/server';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get("username");
        const password = data.get("password");

        if (typeof username !== "string" || typeof password != "string") error(400);
        const result = db.sql`SELECT 1 FROM users WHERE username = ${username} AND password = ${password}`.get();

        if (!result) redirect(303, "/login?err=true&msg=login failed");

        cookies.set("token", await createToken(username), { path: "/" });
        redirect(303, "/posts");
    }
};
