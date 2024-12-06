import { DatabaseWrapper } from "../../../database/wrapper";

const dbFile = "database.sqlite3";

export const db = new DatabaseWrapper(dbFile, {
    readonly: false,
    fileMustExist: true,
});
