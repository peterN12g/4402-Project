// Deletes the existing database, creates new database, adds tables, and populates with initial values

import Database from 'better-sqlite3';
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

/**
 * @returns { import("better-sqlite3").Database }
 */
function createDatabase() {
    console.log("creating database...");
    const db = new Database(dbFile, {
        readonly: false,
        fileMustExist: false,
    });
    db.pragma("journal_mode = WAL");
    return db;
}

/**
 * @param { import("better-sqlite3").Database } db
 */
function addTables(db) {
    console.log("adding tables...");
    db.exec(schema);
}

/**
 * @param { import("better-sqlite3").Database } db
 */
function populateTables(db) {
    console.log("populating tables...");
    db.exec(populate);
}

await removeExistingDatabase();
const db = createDatabase();
addTables(db);
populateTables(db);
console.log("done")
