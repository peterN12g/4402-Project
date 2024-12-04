<script lang="ts">
    export let data;
    let activeTab: string = "friends";
    function showTab(tabName: string): void {
        activeTab = tabName;
    }
    let friendRequests: { username: string, full_name: string }[] = [
        { username: "mike123", full_name: "Mike Johnson" },
        { username: "alice_92", full_name: "Alice Brown" },
    ];
</script>

<h1>Friends and Requests</h1>
<div class="tabs">
    <button class="tab {activeTab === 'friends' ? 'active' : ''}" on:click={() => showTab("friends")} aria-pressed="{activeTab === 'friends'}">Friends</button>
    <button class="tab {activeTab === 'requests' ? 'active' : ''}" on:click={() => showTab("requests")} aria-pressed="{activeTab === 'requests'}">Requests</button>
    <button class="tab {activeTab === 'users' ? 'active' : ''}" on:click={() => showTab("users")} aria-pressed="{activeTab === 'users'}">Users</button>
</div>
<div id="friends" class="content {activeTab === 'friends' ? '' : 'hidden'}">
    <div class="friend-list">
        {#each data.friends as friend, index}
        <div class="friend-request">
            <p><strong>Name:</strong> {friend.username}</p>
            <p><strong>Full name:</strong>{friend.full_name}</p>
        </div>
        {/each}
    </div>
</div>
<div id="requests" class="content {activeTab === 'requests' ? '' : 'hidden'}">
    <div class="friend-list">
        {#each friendRequests as request, index}
        <div class="friend-request">
            <p><strong>Name:</strong> {request.username}</p>
            <p><strong>Full name:</strong>{request.full_name}</p>
            <button class="add-button">Accept</button>
        </div>
        {/each}
    </div>
</div>
<div id="send-request" class="content {activeTab === 'users' ? '' : 'hidden'}">
    {#each data.nonFriends as nonfriend, index}
    <div class="friend-list">
        <div class="friend-request">
            <p><strong>Name:</strong> {nonfriend.username}</p>
            <p><strong>Full name:</strong>{nonfriend.full_name}</p> 
        </div>
    </div>
    {/each}
</div>

<style>
    .tabs {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    .tab {
        padding: 10px 20px;
        border: 1px solid white;
        border-radius: 5px;
        cursor: pointer;
    }

    .tab.active {
        background-color: black;
        color: white;
        border-color: white;
    }

    .content.hidden {
        display: none;
    }

    .friend-list {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .friend-request {
        display: flex;
        flex-direction: column;
        padding: 10px;
        border: 1px solid white;
        border-radius: 5px;
    }

    .add-button {
        margin-top: 10px;
        padding: 10px 15px;
        background-color: white;
        color: black;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 20%;
    }

    .add-button:hover {
        background-color: gray;
    }
</style>