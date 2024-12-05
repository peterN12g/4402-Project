<script lang="ts">
    export let data;
    let activeTab: string = "friends";
    function showTab(tabName: string): void {
        activeTab = tabName;
    }
    async function sendRequest(username:string) {
        await fetch('/api/friends/request', {
            method: 'POST',
            body: JSON.stringify({ username }),
        });
        location.reload();
    }
    async function removeFriend(username:string) {
        await fetch('/api/friends/remove', {
            method: 'DELETE',
            body: JSON.stringify({ username }),
        });
        location.reload();
    }
    async function acceptFriend(username:string) {
        await fetch('/api/friends/accept', {
            method: 'POST',
            body: JSON.stringify({ username }),
        });
        location.reload();
    }
    async function rejectRequest(username:string) {
        await fetch('/api/friends/reject', {
            method: 'DELETE',
            body: JSON.stringify({ username }),
        });
        location.reload();
    }
</script>

<h1>Friends and Requests</h1>
<div class="tabs">
    <button class="tab {activeTab === 'friends' ? 'active' : ''}" onclick={() => showTab("friends")} aria-pressed="{activeTab === 'friends'}">Friends</button>
    <button class="tab {activeTab === 'requests' ? 'active' : ''}" onclick={() => showTab("requests")} aria-pressed="{activeTab === 'requests'}">Requests</button>
    <button class="tab {activeTab === 'users' ? 'active' : ''}" onclick={() => showTab("users")} aria-pressed="{activeTab === 'users'}">Users</button>
</div>
<div id="friends" class="content {activeTab === 'friends' ? '' : 'hidden'}">
    <div class="friend-list">
        {#each data.friends as friend}
        <div class="friend-request">
            <p><strong>Name:</strong> {friend.username}</p>
            <p><strong>Full name:</strong>{friend.full_name}</p>
            <button class="remove" onclick={() => removeFriend( friend.username )}>Remove</button>
        </div>
        {/each}
    </div>
</div>
<div id="requests" class="content {activeTab === 'requests' ? '' : 'hidden'}">
    <div class="friend-list">
        {#each data.request as request}
        <div class="friend-request">
            <p><strong>Name:</strong> {request.username}</p>
            <p><strong>Full name:</strong>{request.full_name}</p>
            <button class="add-button" onclick={() => acceptFriend(request.username)}>Accept</button>
            <button class="reject" onclick={() => rejectRequest(request.username)}>Reject</button>
        </div>
        {/each}
    </div>
</div>
<div id="send-request" class="content {activeTab === 'users' ? '' : 'hidden'}">
    {#each data.nonFriends as nonfriend}
    <div class="friend-list">
        <div class="friend-request">
            <p><strong>Name:</strong> {nonfriend.username}</p>
            <p><strong>Full name:</strong>{nonfriend.full_name}</p> 
            <button class="add" onclick={() => sendRequest(nonfriend.username)}>Friend Request</button>
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

    .add-button, .add, .remove, .reject {
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