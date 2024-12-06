# Y - social media app

### Instructions

#### Set up environment

1. Install [NodeJS](https://nodejs.org/). Must install version v22.6.0 or later.
2. Run `npm install`.

#### Initialize the database

`npm run regen` will regenerate the database, removing the current database (if it exists), creating a new database, adding the tables, and populating it with initial values.

This will create a SQLite database under `database.sqlite3`.

[This VSCode extension](https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer) is useful for viewing the database contents.

#### Run the app

`npm run app` will run the site on http://localhost:5173.

### Description of App Features

When first going to the site, you will be redirected to login page.
You can either log in with one as one of the existing users in the database (using their username and password),
or you can create your own via registration.

Once logged in, you will see the posts page. You can make posts here.
The only posts you can see are your own posts or posts made by friends.
If you registed new user, you won't see any posts, because you have not yet friended anybody.

You can make friend requests on the friends page, on the "Add Friends" tab. To accept the friend request,
log in as the other user on a new browser window (Incognito), navigate to the friends page, and accept the request from the first user.

Going back to the posts page, you should now be able to see their posts. When clicking on a post,
you can then like a post, comment on it, or like other people's comments.

The profile page will tell details of the currently authenticated user such as their username and full name.

### Description of database files

The file [./database/regen.ts](./database/regen.ts) contains code for creating the database and populating it with fake data.
It generates data using FakerJS with deterministic random seed.

The file [./database/schema.sql](./database/schema.sql) contains the SQL code for creating the tables.

### Tech Stack

NodeJS, SvelteKit, SQLite

