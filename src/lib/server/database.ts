import { open } from "sqlite";
import sqlite3 from "sqlite3";

export const db = await openDb();

async function openDb() {
    const dbFile = "database.sqlite3";

    return await open({
        filename: dbFile,
        mode: sqlite3.OPEN_READWRITE,
        driver: sqlite3.Database,
    });
}
