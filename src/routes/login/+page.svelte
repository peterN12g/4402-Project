<div class="wrapper">
    <h1>Login</h1>
    <div class="form__group field">
        <input type="input" class="form__field" placeholder="Username" name="username" id="username" required />
        <label for="username" class="form__label">Username</label>
    </div>
    <div class="form__group field">
        <input type="password" class="form__field" placeholder="Password" name="password" id="password" required />
        <label for="password" class="form__label">Password</label>
    </div>
    <button type="button">Login</button>
    <a href="/register" class="register">Register</a>
</div>
<div> </div>


<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
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
        margin-top: 2%;
        padding: 10px;
        width: 10%;
        background-color: rgb(26, 140, 216);
    }

    h1 {
        font-size: 3em;
    }

    .register{
        margin-top: 1%;
    }
</style>