import { html } from '../../node_modules/lit-html/lit-html.js';
import authService from '../services/authService.js';
import util from '../util.js';

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
            return alert(`All fields are required!`);
        }
        const loginData = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        authService.login(loginData)
            .then(data => {
                console.log(data)
                if (data.code == 403) {
                    return alert(data.message);
                }
                const userData = {
                    email: data.email,
                    userId: data._id,
                    token: data.accessToken
                };
                util.setUserData(userData);
                ctx.updateUserNav();
                ctx.page.redirect('/');
            })
    })

}

