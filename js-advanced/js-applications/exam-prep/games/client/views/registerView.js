import { html } from '../node_modules/lit-html/lit-html.js';
import service from '../src/service/service.js';
import utils from '../src/utils.js';

const registerView = () => html`
   <section id="register-page" class="content auth">
            <form id="register">
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">

                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>

`;

export default function (ctx) {
    ctx.render(registerView());

    const registerForm = document.getElementById('register');

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

        service.register(registerData)
            .then(data => {
                if (data.code == 409 || data.code == 403) {
                    return alert(data.message);
                }
                utils.setUserData(data);
                ctx.updateUserNav();
                ctx.page.redirect('/');
            })
    })
}