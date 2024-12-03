import { userFromCookies } from '$lib/server';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
    if (await userFromCookies(cookies) === undefined) redirect(302, "/login");
}
