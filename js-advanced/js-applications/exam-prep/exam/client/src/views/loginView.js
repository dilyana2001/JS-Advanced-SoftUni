import { html } from '../../node_modules/lit-html/lit-html.js';
import service from '../service/service.js';
import utils from '../../utils.js';

const loginView = () => html`
<section id="loginPage">
    <form>
        <fieldset>
            <legend>Login</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <button type="submit" class="login">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
`;

export default function (ctx) {
    ctx.render(loginView());
    const loginForm = document.querySelector('#loginPage form');

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
                let resultData = {
                    email: data.email,
                    id: data._id,
                    token: data.accessToken
                }
                utils.setUserData(resultData);
                ctx.updateUserNav();
                ctx.page.redirect('/');
            })
    })
}
