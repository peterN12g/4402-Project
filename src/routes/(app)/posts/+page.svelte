<script lang="ts">
    let newPost: string = "";
    type commentFormat = { id: number; username: string; content: string; likes: number; likedYet: boolean };
    type postFormat = { username: string; id: number; content: string; likes: number; likedYet: boolean; comments: commentFormat[]; newComment: string; };
    let posts: postFormat[] = [
        { username: "mike123", id: 1, content: "Had an amazing trip to the beach!", likes: 0, likedYet: false, comments: [], newComment: "" },
        { username: "tvuong", id: 2, content: "Excited to start a new project.", likes: 0, likedYet: false, comments: [], newComment: "" },
        { username: "janedoe", id: 3, content: "Working on a new coding challenge.", likes: 0, likedYet: false, comments: [], newComment: "" },
    ];
    function addPost() {
        if (newPost.trim()) {
            posts = [
                {
                    username: "anonymous", //eventually add real username
                    id: posts.length + 1,
                    content: newPost.trim(),
                    likes: 0,
                    likedYet: false,
                    comments: [],
                    newComment: "",
                },
                ...posts,
            ];
            newPost = "";
        }
    }
    function likePost(postId: number) {
        posts = posts.map(post => post.id === postId ? {
            ...post,
            likes: post.likedYet ? post.likes - 1 : post.likes + 1,
            likedYet: !post.likedYet,
        }
        : post);
    }
    function addComment(postId: number) {
        posts = posts.map(post => post.id === postId ? {
            ...post,
            comments: post.newComment.trim() ? [
                ...post.comments, {
                    id: post.comments.length + 1,
                    username: "anonymous", //eventually add real username
                    content: post.newComment.trim(),
                    likes: 0,
                    likedYet: false,
                },
            ]
            : post.comments,
            newComment: "",
        }
        : post);
    }
    function likeComment(postId: number, commentId: number) {
        posts = posts.map(post => post.id === postId ? {
            ...post,
            comments: post.comments.map(comment => comment.id === commentId ? {
                ...comment,
                likes: comment.likedYet ? comment.likes - 1 : comment.likes + 1,
                likedYet: !comment.likedYet,
            }
            : comment),
        }
        : post);
    }
</script>

<h1 class="title">Home</h1>
<div class="post-form">
    <textarea bind:value={newPost} placeholder="What's happening?" rows="3"></textarea>
    <button on:click={addPost} class="post-button">Post</button>
</div>
<div class="posts">
    {#each posts as post}
    <div class="post">
        <p><strong>{post.username}</strong></p>
        <p>{post.content || "This is a blank post. Add your content here!"}</p>
        <button class:liked={post.likedYet} on:click={() => likePost(post.id)}>👍 Like ({post.likes})</button>
        <div class="comments">
            <textarea bind:value={post.newComment} placeholder="Write a comment..." rows="2"></textarea>
            <button on:click={() => addComment(post.id)}>Comment</button>
            {#each post.comments as comment}
            <div class="comment">
                <p><strong>{comment.username}</strong></p>
                <p>{comment.content}</p>
                <button class:liked={comment.likedYet} on:click={() => likeComment(post.id, comment.id)}>👍 Like ({comment.likes})</button>
            </div>
            {/each}
        </div>
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
    }

    .comments {
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
    }

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
