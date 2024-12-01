<script lang="ts">
    let posts: { username: string; id: number; content: string }[] = [
        { username: "mike123", id: 1, content: "Had an amazing trip to the beach!" },
        { username: "tvuong", id: 2, content: "Excited to start a new project." },
        { username: "janedoe", id: 3, content: "Working on a new coding challenge." },
    ];
    let newPostContent: string = "";

    function addPost() {
        if (newPostContent.trim()) {
            posts = [
                { username: "", id: posts.length + 1, content: newPostContent.trim() },
                ...posts,
            ];
            newPostContent = "";
        }
    }
</script>

<h1 class="title">Home</h1>

<div class="post-form">
    <textarea
        bind:value={newPostContent}
        placeholder="What's happening?"
        rows="3"
    ></textarea>
    <button on:click={addPost} class="post-button">Post</button>
</div>

<div class="posts">
    {#each posts as post}
    <div class="post">
        <p><strong>{post.username}</strong></p>
        <p>{post.content || "This is a blank post. Add your content here!"}</p>
    </div>
    {/each}
</div>

<style>
    .title {
        font-size: 2rem;
        text-align: center;
        padding: 20px;
        background-color: gray;
        color: white;
        margin: 0;
    }

    .post-form {
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 10px;
        background-color: black;
        border: 1px solid white;
    }

    textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        resize: none;
        background-color: black;
        color: white;
    }

    .post-button {
        align-self: flex-end;
        padding: 10px 20px;
        background-color: #1da1f2;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .post-button:hover {
        background-color: #1a91da;
    }

    .posts {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 20px;
        background-color: black;
    }

    .post {
        background-color: black;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border: 1px solid #e1e8ed;
    }
</style>
