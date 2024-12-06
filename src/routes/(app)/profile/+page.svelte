<script lang="ts">
    import { goto } from '$app/navigation';
    export const { data } = $props();

    async function logout() {
        await fetch('/logout', { 
            method: 'GET' 
        });
        goto('/login?msg=Logged out');
    }
</script>

<div class="wrapper">
    <h1>{data.username}</h1>
    <h2>{data.fullName}</h2>
    <button onclick={logout}>Logout</button>
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
        background-color: gray;
        color: white;
        border: 2px solid white;
        width: 30%;
    }
    button:hover {
        background-color: #252323;
    }

</style>
