import Database from "better-sqlite3";
import sql, { type RawValue } from "sql-template-tag";

export class DatabaseWrapper {
    underlyingDB: Database.Database;

    constructor(filename?: string, options?: Database.Options) {
        this.underlyingDB = new Database(filename, options);
        this.underlyingDB.pragma("journal_mode = WAL");
    }

    sql(strings: readonly string[], ...params: readonly RawValue[]) {
        const { sql: text, values } = sql(strings, ...params);
        return this.underlyingDB.prepare(text).bind(values);
    }

    transact<R>(fn: () => R): R {
        return this.underlyingDB.transaction(fn)();
    }
}
