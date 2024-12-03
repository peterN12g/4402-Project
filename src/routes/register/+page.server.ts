import { db } from '$lib/server';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
        const data = await request.formData();
        const fullName = data.get("full_name");
        const username = data.get("username");
        const password = data.get("password");

        if (typeof fullName !== "string" || typeof username !== "string" || typeof password != "string") error(400);
        if (fullName.length < 1 || username.length < 3 || password.length < 6) error(400);

        db.sql`INSERT INTO users (username, full_name, password) VALUES (${username}, ${fullName}, ${password})`.run()
    
        redirect(303, "/login?msg=Registration successful. Proceed to log in.");
	}
};
