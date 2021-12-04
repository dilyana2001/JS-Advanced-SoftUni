import { html } from '../node_modules/lit-html/lit-html.js';
import service from '../src/service/service.js';
import utils from '../src/utils.js';

const loginView = () => html`
<section id="login-page" class="auth">
            <form id="login">
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`;

export default function (ctx) {
    ctx.render(loginView());
    const loginForm = document.getElementById('login');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        if (!formData.get('email') || !formData.get('password')) {
            return alert(`All fields are required!`);
        }

        const loginData = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        service.login(loginData)
            .then(data => {
                console.log(data)
                if (data.code == 403) {
                    return alert(data.message);
                }
                utils.setUserData(data);
                ctx.updateUserNav();
                ctx.page.redirect('/');
            })
    })
}