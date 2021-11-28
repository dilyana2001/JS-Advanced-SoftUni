import { html } from '../../node_modules/lit-html/lit-html.js';
import authService from '../services/authService.js'


const loginView = () => html`
<section id="login-page" class="login">
    <form id="login-form" action="" method="">
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email" />
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password" />
                </span>
            </p>
            <input class="button submit" type="submit" value="Login" />
        </fieldset>
    </form>
</section>
`;

export default function (ctx) {
    ctx.render(loginView());
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        if (!formData.get('email') || !formData.get('password')) {
            return alert(`All fields are required!`)
        }
        authService.login(formData);
        ctx.updateUserNav();
        ctx.page.redirect('/');
    })

}

