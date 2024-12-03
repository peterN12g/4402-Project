import Database, { type Database as DatabaseType } from "better-sqlite3";
import sql, { type RawValue } from "sql-template-tag";

const dbFile = "database.sqlite3";

class DatabaseWrapper {
    underlyingDB: Database.Database;

    constructor(filename?: string, options?: Database.Options) {
        this.underlyingDB = new Database(filename, options);
        this.underlyingDB.pragma("journal_mode = WAL");
    }

    sql(strings: readonly string[], ...params: readonly RawValue[]) {
        const { sql: text, values } = sql(strings, ...params);
        console.log(text, values)
        return this.underlyingDB.prepare(text).bind(values);
    }

    transact<R>(fn: () => R): R {
        return this.underlyingDB.transaction(fn)();
    }
}

export const db = new DatabaseWrapper(dbFile, {
    readonly: false,
    fileMustExist: true,
});
