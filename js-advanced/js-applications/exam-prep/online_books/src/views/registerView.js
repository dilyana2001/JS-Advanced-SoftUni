import { html } from '../../node_modules/lit-html/lit-html.js';
import authService from '../services/authService.js';

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
        if (!formData.get('email' || !formData.get('password'))) {
            return alert(`All fields are required!`)
        }
        if (formData.get('password') !== formData.get('confirm-pass')) {
            return alert(`Password don't match!`)
        }
        authService.register(formData);
        ctx.updateUserNav();
        ctx.page.redirect('/');
    })
}