<script lang="ts">
    const { data } = $props();
</script>

<h1 class="title">Home</h1>

<form class="post-form" method="post">
    <textarea name="description" placeholder="What's happening?" rows="3"></textarea>
    <button class="post-button">Post</button>
</form>

<div class="posts">
    {#each data.posts as post}
        <a href="/posts/{post.id}" class="post" role="button" tabindex="0">
            <p><strong>{post.username}</strong></p>
            <p>{post.description || "This is a blank post. Add your content here!"}</p>
            <p>👍 Likes: {post.likes}<br>Comments: {post.comments}</p>
        </a>
    {/each}
</div>

<style>
    a {
        text-decoration: none;
        color: white;
    }

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
        background-color: cornflowerblue;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .post-button:hover {
        background-color: gray;
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
        border: 1px solid white;
        cursor: pointer;
        transition: transform 0.2s;
        display: block;
        width: 100%;
    }

    /*.comments {
        margin-top: 10px;
        padding: 10px;
        background-color: black;
        border-radius: 5px;
    }

    .comment {
        margin-top: 5px;
        padding: 5px;
        border: 1px solid white;
        border-radius: 5px;
        color: white;
    }

    .comment p {
        margin: 0;
    }

    button.liked {
        color: white;
        background-color: deepskyblue;
    }*/

    button {
        cursor: pointer;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        background-color: white;
    }

    button:hover {
        background-color: gray;
    }
</style>
