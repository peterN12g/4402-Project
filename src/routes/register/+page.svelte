<script>
    
</script>

<div class="header">
    <h1>𝕐</h1>
    <div>
        <h2>Happening now</h2>
        <h3>Join today.</h3>
        <div class="form__group field">
            <input type="input" class="form__field" placeholder="Name" name="name" id="name" required />
            <label for="name" class="form__label">Name</label>
        </div>
        <div class="form__group field">
            <input type="input" class="form__field" placeholder="Username" name="username" id="username" required />
            <label for="username" class="form__label">Username</label>
        </div>
        <div class="form__group field">
            <input type="password" class="form__field" placeholder="Password" name="password" id="password" required />
            <label for="password" class="form__label">Password</label>
        </div>
        <button type="button">Sign up</button>
    </div>
</div>

<style>
    div.header {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 10px;    
    }

    h1 {
        color: white;
        text-align: left;
        font-family: 'Brush Script MT', cursive;
        font-size: 22em;
    }

    h2 {
        font-size: 5em;
        font-style: bold;

    }

    h3 {
        font-size: 2.5em;
        font-style: bold;
    }

    .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
        width: 50%;
    }

    .form__field {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid #9b9b9b;
        outline: 0;
        font-size: 1.3rem;
        color: #fff;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
    }

    .form__field::placeholder {
        color: transparent;
    }

    .form__field:placeholder-shown ~ .form__label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }

    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #9b9b9b;
    }

    .form__field:focus {
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, #11998e, #38ef7d);
        border-image-slice: 1;
    }

    .form__field:focus ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #11998e;
        font-weight: 700;
    }

    .form__field:required, .form__field:invalid {
        box-shadow: none;
    }

    button {
        margin-top: 5%;
        padding: 10px;
        width: 30%;
        margin-left: 8%;
        background-color: rgb(26, 140, 216);
    }
</style>
    
