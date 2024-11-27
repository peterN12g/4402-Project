import { type Cookies } from "@sveltejs/kit";
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode("Y");

export async function createToken(username: string): Promise<string> {
    return await new SignJWT()
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("30d")
        .setSubject(username)
        .sign(secret);
}

async function userFromToken(token: string): Promise<string | undefined> {
    try {
        const { payload } = await jwtVerify(token, secret);
        return payload.sub;
    } catch {
        return undefined;
    }
}

export async function userFromCookies(cookies: Cookies): Promise<string | undefined> {
    const token = cookies.get("token");
    if (token === undefined) return undefined;
    return await userFromToken(token);
}
