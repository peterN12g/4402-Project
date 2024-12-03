<script lang="ts">
    export const { data } = $props();

    function displayInfo(info: string): void {
        const x = document.getElementsByClassName("tab-content") as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
                const element = document.getElementById(info) as HTMLElement | null;
        if (element) {
            element.style.display = "block";
        }
    }
</script>

<div class="wrapper">
    <h1>
        {data.username}
    </h1>
    <h2>
        {data.fullName}
    </h2>
    <div class="buttons">
        <button onclick={() => displayInfo('posts')}>Posts</button>
        <button onclick={() => displayInfo('friends')}>Friends</button>
    </div>
    <div id="posts" class="tab-content" style="display:none;">
        <h2>Posts</h2>
        <p>Here are the posts...</p>
    </div>
    <div id="friends" class="tab-content" style="display:none;">
        <h2>Friends</h2>
        <p>Here is your friends list...</p>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        height: 20vh;
        margin-right: 20%;
    }

    h1 {
        margin-right: 50%;
    }

    h2 {
        margin-right: 53%;
        margin-bottom: 5%;
    }

    div {
        text-align: center;
        margin-bottom: 20px;
    }

    button {
        padding: 10px 20px;
        margin: 5px;
        font-size: 16px;
        cursor: pointer;
        background-color: black;
        color: white;
        border-bottom: 2px solid #9b9b9b;
        border-left: black;
        border-top: black;
        width: 30%;
    }

    .tab-content {
        display: none;
        text-align: center;
        margin-top: 20px;
    }

    .tab-content h2 {
        font-size: 24px;
    }

    button:hover {
        background-color: #252323;
    }
</style>
