import {html} from '../../node_modules/lit-html/lit-html.js';
import service from '../service/service.js';
import utils from '../../utils.js';

const registerView = () => html`
    <section id="registerPage">
            <form>
                <fieldset>
                    <legend>Register</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <label for="conf-pass" class="vhide">Confirm Password:</label>
                    <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                    <button type="submit" class="register">Register</button>

                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>

`;

export default function (ctx) {
    ctx.render(registerView());

    const registerForm = document.querySelector('#registerPage form');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        if (!formData.get('email') || !formData.get('password')) {
            return alert(`All fields are required!`)
        }
        if (formData.get('password') !== formData.get('conf-pass')) {
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