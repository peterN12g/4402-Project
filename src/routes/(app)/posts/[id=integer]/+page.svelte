<script>
    const { data } = $props();

    async function onDelete() {
        await fetch(`/posts/${data.post.id}`, { method: "delete" });
        location.href = "/posts";
    }
</script>

<div class="post">
    <p><strong>{data.post.username}</strong></p>
    <p>{data.post.description || "This is a blank post. Add your content here!"}</p>
    <p>👍 Likes: {data.post.likes}<br>Comments: {data.comments.length}</p>
    {#if data.isAuthor}
        <button onclick={ onDelete }>Delete Post</button>
    {/if}
</div>

<section class="comments">
    <h2>Comments</h2>
    {#if data.comments.length > 0}
        <div class="comment-list">
            {#each data.comments as comment}
                <div class="comment">
                    <p><strong>{comment.username}</strong>: {comment.text}</p>
                    <span>👍 Likes: {comment.likes}</span>
                </div>
            {/each}
        </div>
    {:else}
        <p>No comments.</p>
    {/if}
</section>

<form method="post" class="comment-form">
    <textarea name="description" placeholder="Post your reply" required></textarea>
    <button type="submit">Post Comment</button>
</form>

<style>
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

    .comments {
        margin-top: 20px;
        padding: 15px;
        background-color: black;
        border-radius: 8px;
        border: 1px solid dimgray;
    }

    .comment-list {
        margin-top: 15px;
    }

    .comment {
        padding: 12px;
        background-color: black;
        border-radius: 5px;
        margin-bottom: 10px;
        border: 1px solid dimgray;
    }

    .comment p {
        margin: 0;
    }

    .comment span {
        font-size: 0.9em;
        color: whitesmoke;
    }

    .comment-form {
        margin-top: 20px;
    }

    textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: 1px solid white;
        background-color: black;
        color: white;
        font-size: 1em;
    }

    button {
        background-color: deepskyblue;
        color: white;
        padding: 10px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        font-weight: bold;
        width: 10%;
    }

    button:hover {
        background-color: cadetblue;
    }

    h2 {
        font-size: 1.2em;
        color: white;
        margin-bottom: 10px;
    }
</style>
