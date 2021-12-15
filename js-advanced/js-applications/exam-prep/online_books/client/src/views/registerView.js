import { html } from '../../node_modules/lit-html/lit-html.js';
import authService from '../services/authService.js';
import util from '../util.js'

const registerView = () => html`
        <section id="register-page" class="register">
            <form id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`;

export default function (ctx) {
    ctx.render(registerView());

    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        if (!formData.get('email') || !formData.get('password')) {
            return alert(`All fields are required!`)
        }
        if (formData.get('password') !== formData.get('confirm-pass')) {
            return alert(`Password don't match!`)
        }
        const registerData = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        authService.register(registerData)
            .then(data => {
                if (data.code == 409 || data.code == 403) {
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