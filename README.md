### Instructions

#### Set up environment

1. Install [NodeJS](https://nodejs.org/).
2. Run `npm install`.

#### Initialize the database

`npm run regen` will regenerate the database, removing the current database (if it exists), creating a new database, adding the tables, and populating it with initial values.

This will create a SQLite database under `database.sqlite3`.

[This VSCode extension](https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer) is useful for viewing the database contents.

#### Run the app

`npm run app` will run the site.
