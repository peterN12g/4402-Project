import { error } from '@sveltejs/kit';
import { createToken, db } from '$lib/server';

export async function POST({ request, cookies }) {
	const { username, password } = await request.json();
	if (typeof username !== "string" || typeof password != "string") error(400);
	const result = db.sql`SELECT 1 FROM users WHERE username = ${username} AND password = ${password}`.get();

	if (!result) error(401);

	cookies.set("token", await createToken(username), { path: "/" });
	return new Response();
}
