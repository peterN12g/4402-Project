import { error, fail } from '@sveltejs/kit';
import { db } from '$lib/server';

export async function POST({ request }) {
	const { username, full_name, password } = await request.json();
	if (typeof username !== "string" || typeof full_name !== "string" || typeof password != "string") error(400);

	db.sql`INSERT INTO users (username, full_name, password) VALUES (${username}, ${full_name}, ${password})`.run()
	return new Response();
}
