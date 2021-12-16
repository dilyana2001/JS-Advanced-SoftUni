import {html} from '../node_modules/lit-html/lit-html.js';
import service from '../services/service.js';
import utils from '../utils.js';

const register = () => html`
       <section id="register">
            <div class="container">
                <form id="register-form">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="#">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>
`;

export default function (ctx) {
    ctx.render(register());

    const registerForm = document.getElementById('register');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        if (!formData.get('username') || !formData.get('password')) {
            return alert(`All fields are required!`)
        }
        if (formData.get('password') !== formData.get('repeatPass')) {
            return alert(`Password don't match!`)
        }

        const registerData = {
            username: formData.get('username'),
            password: formData.get('password')
        };

        service.register(registerData)
            .then(data => {
                if (data.code == 409 || data.code == 403) {
                    return alert(data.message);
                }
                let resultData = {
                    username: data.username,
                    id: data._id,
                    token: data.accessToken
                }
                utils.setUserData(resultData);
                ctx.updateUserNav();
                ctx.page.redirect('/');
            })
    })
}