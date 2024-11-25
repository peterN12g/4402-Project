// Deletes the existing database, creates tables, and populates with initial values

import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { readFile, rm } from "fs/promises";

const schema = await readFile("schema.sql", "utf-8");
const populate = await readFile("populate.sql", "utf-8");


console.log("Reseting database...")


await rm("./sqlite.db", { force: true });
const db = await open({
    filename: "./sqlite.db",
    driver: sqlite3.Database,
});

db.exec(schema);
db.exec(populate);
