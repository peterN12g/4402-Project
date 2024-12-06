<script lang="ts">
    const { data } = $props();

    async function onDelete() {
        await fetch(`/posts/${data.post.id}`, { method: "delete" });
        location.href = "/posts";
    }

    async function onLike(event: MouseEvent) {
        const button = event.currentTarget as HTMLButtonElement;
        const postId = parseInt(button.dataset.postId || '0');
        const response = await fetch(`/posts/${data.post.id}/post-likes`, {
            method: "POST",
        });
        if (response.ok) {
            const updatedData = await response.json();
            data.post.likes = updatedData.likes;
            const likeButton = document.getElementById(`like-button-${postId}`);
            if (likeButton) {
                likeButton.textContent = data.post.likes > 0 ? "Unlike" : "Like";
            } else {
                console.error('no button');
            }
        } else {
            console.error("like/unlike failure");
        }
        location.reload();
    }

    async function onLikeComment(event: MouseEvent) {
        const button = event.currentTarget as HTMLButtonElement;
        const commentId = parseInt(button.dataset.commentId || '0');
        const response = await fetch(`/posts/${data.post.id}/comment-likes`, {
            method: "POST",
            body: JSON.stringify({
                commentId: commentId,
            }),
        });
        if (response.ok) {
            const updatedData = await response.json();
            //need below undefined check to avoid UI glitching onclick (don't remove)
            if (updatedData && updatedData.likes !== undefined) {
                const commentElement = document.getElementById(`comment-likes-${commentId}`);
                if (commentElement) {
                    commentElement.textContent = `👍 Likes: ${updatedData.likes}`;
                } else {
                    console.error('No comment element found for update');
                }
                setTimeout(() => {
                    location.reload();
                }, 100);
            } else {
                console.error('Invalid updated data structure');
            }
        } else {
            console.error("Like/unlike failure for comment");
        }
        location.reload();
    }
</script>

<div class="post">
    <p><strong>{data.post.username}</strong></p>
    <p>{data.post.description || "This is a blank post. Add your content here!"}</p>
    <p>👍 Likes: {data.post.likes}<br>Comments: {data.comments.length}</p>
    {#if data.isAuthor}
        <button onclick={onDelete}>Delete Post</button>
    {/if}
    <button id="like-button-{data.post.id}" data-post-id={data.post.id} onclick={onLike}>Like</button>
</div>
<section class="comments">
    <h2>Comments</h2>
    {#if data.comments.length > 0}
        <div class="comment-list">
            {#each data.comments as comment (comment.id)}
                <div class="comment">
                    <p><strong>{comment.username}</strong>: {comment.text}</p>
                    <span id="comment-likes-{comment.id}">👍 Likes: {comment.likes}</span>
                    <button class="comment-like-button" data-comment-id={comment.id} onclick={onLikeComment}>Like</button>
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
        background-color: dodgerblue;
        color: white;
        padding: 10px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        font-weight: bold;
        width: 10%;
    }

    .comment-like-button {
        background-color: dodgerblue;
        color: white;
        padding: 5px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        font-weight: bold;
        width: 5%;
        margin-top: 5px;
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
