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
</style>
