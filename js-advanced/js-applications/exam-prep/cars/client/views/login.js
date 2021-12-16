import { html } from '../node_modules/lit-html/lit-html.js';
import service from '../services/service.js';
import utils from '../utils.js';

const login = () => html`
       <section id="login">
            <div class="container">
                <form id="login-form" action="#" method="post">
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="#">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
`;

export default function (ctx) {
    ctx.render(login());
    const loginForm = document.getElementById('login');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (!formData.get('username') || !formData.get('password')) {
            return alert(`All fields are required!`);
        }

        const loginData = {
            username: formData.get('username'),
            password: formData.get('password')
        };

        service.login(loginData)
            .then(data => {
                console.log(data)
                if (data.code == 403) {
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