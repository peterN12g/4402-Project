// Deletes the existing database, creates new database, adds tables, and populates with initial values

import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { readFile, rm, access, constants } from "node:fs/promises";

const dbFile = "database.sqlite3";

const schema = await readFile("sql/schema.sql", "utf-8");
const populate = await readFile("sql/populate.sql", "utf-8");

async function removeExistingDatabase() {
    try {
        await access(dbFile, constants.F_OK);
    } catch(e) {
        return;
    }
    
    console.log("removing existing database...");
    await rm(dbFile);
}

async function createDatabase() {
    console.log("creating database...");
    return await open({
        filename: dbFile,
        mode: sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE,
        driver: sqlite3.Database,
    });
}

async function addTables(db) {
    console.log("adding tables...");
    await db.exec(schema);
}

async function populateTables(db) {
    console.log("populating tables...");
    await db.exec(populate);
}

await removeExistingDatabase();
const db = await createDatabase();
await addTables(db);
await populateTables(db);
console.log("done")
