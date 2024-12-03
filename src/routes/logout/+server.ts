import { redirect } from '@sveltejs/kit';

export async function GET({ cookies }) {
    cookies.set("token", "", { path: "/", expires: new Date(0) });
    throw redirect(303, "/login");
};
