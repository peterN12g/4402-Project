// Deletes the existing database, creates new database, adds tables, and populates with initial values

import { faker } from '@faker-js/faker';
import { DatabaseWrapper } from "./wrapper.ts";
import { readFile, rm, access, constants } from "node:fs/promises";

const dbFile = "database.sqlite3";
const seed = 123456789;

const schema = await readFile("database/schema.sql", "utf-8");

async function removeExistingDatabase() {
    try {
        await access(dbFile, constants.F_OK);
    } catch(e) {
        return;
    }
    
    console.log("removing existing database...");
    await rm(dbFile);
}

function createDatabase() {
    console.log("creating database...");
    return new DatabaseWrapper(dbFile, {
        readonly: false,
        fileMustExist: false,
    });
}

function addTables(db: DatabaseWrapper) {
    console.log("adding tables...");
    db.underlyingDB.exec(schema);
}

function populateTables(db: DatabaseWrapper) {
    console.log("populating tables...");
    faker.seed(seed);

    const users = function() {
        const users: {
            username: string,
            fullName: string,
            password: string,
        }[] = [];
        for (let i = 0; i < 30; i++) {
            const opts = {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
            };
    
            users.push({
                username: faker.internet.username(opts),
                fullName: faker.person.fullName(opts),
                password: faker.internet.password({ memorable: true }),
            });
        }
        return users;
    }()
   
    for (const u of users) {
        db.sql`
            INSERT INTO users (username, full_name, password)
            VALUES (${u.username}, ${u.fullName}, ${u.password})
        `.run();
    }

    for (const u of users) {
        const candidateFriends = shuffle(users).slice(0, 8).filter(f => f.username !== u.username);
        for (const f of candidateFriends) {
            const exists = db.sql`SELECT * FROM friends WHERE username1 = ${f.username} AND username2 = ${u.username}`.get() !== undefined;
            if (exists) break;

            const accepted = faker.number.float() < 0.66;
            const reverse = faker.number.float() < 0.5;

            db.sql`
                INSERT INTO friends (username1, username2, accepted)
                VALUES (${reverse ? f.username : u.username}, ${reverse ? u.username : f.username}, ${accepted ? 1 : 0})
            `.run()
        }
    }

    for (const u of users) {
        for (let i = 0; i < 4; i++) {
            const description = faker.lorem.paragraph();
            db.sql`
                INSERT INTO posts (username, description)
                VALUES (${u.username}, ${description})
            `.run();
        }
    }

    for (const post of db.sql`SELECT id FROM posts`.all() as { id: number }[]) {
        for (const u of shuffle(users).slice(0, 8)) {
            db.sql`
                INSERT INTO comments (post_id, username, text)
                VALUES (${post.id}, ${u.username}, ${faker.lorem.sentence()})
            `.run();
        }
    }

    for (const post of db.sql`SELECT id FROM posts`.all() as { id: number }[]) {
        for (const u of shuffle(users).slice(0, faker.number.int({ min: 1, max: 20 }))) {
            db.sql`
                INSERT INTO post_likes (post_id, username)
                VALUES (${post.id}, ${u.username})
            `.run();
        }
    }

    for (const post of db.sql`SELECT id FROM comments`.all() as { id: number }[]) {
        for (const u of shuffle(users).slice(0, faker.number.int({ min: 0, max: 5 }))) {
            db.sql`
                INSERT INTO comment_likes (comment_id, username)
                VALUES (${post.id}, ${u.username})
            `.run();
        }
    }
}

function shuffle<T>(array: T[]) {
    const copy = array.slice()
    for (var i = copy.length - 1; i >= 0; i--) {
        var j = Math.floor(faker.number.float() * (i + 1));
        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy;
}

await removeExistingDatabase();
const db = createDatabase();
addTables(db);
populateTables(db);
console.log("done")
