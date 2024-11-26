-- entity
CREATE TABLE users (
    username TEXT,
    full_name TEXT,
    password TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (username)
);

-- relation
CREATE TABLE friends (
    username1 TEXT,
    username2 TEXT,
    accepted BOOLEAN,

    FOREIGN KEY (username1) REFERENCES users(username)
    FOREIGN KEY (username2) REFERENCES users(username)
);

-- entity
CREATE TABLE posts (
    id INTEGER, -- don't need to explicitly set. will be auto incremented.
    username TEXT,
    description TEXT,

    PRIMARY KEY (id)
    FOREIGN KEY (username) REFERENCES users(username)
);

-- entity
CREATE TABLE comments (
    id INTEGER, -- don't need to explicitly set. will be auto incremented.
    post_id INTEGER,
    username TEXT,
    text TEXT,

    PRIMARY KEY (id)
    FOREIGN KEY (post_id) REFERENCES posts(id)
    FOREIGN KEY (username) REFERENCES users(username)
);

-- relation
CREATE TABLE post_likes (
    post_id INTEGER,
    username TEXT,

    FOREIGN KEY (post_id) REFERENCES posts(id)
    FOREIGN KEY (username) REFERENCES users(username)
);

-- relation
CREATE TABLE comment_likes (
    comment_id INTEGER,
    username TEXT,

    FOREIGN KEY (comment_id) REFERENCES comments(id)
    FOREIGN KEY (username) REFERENCES users(username)
);
