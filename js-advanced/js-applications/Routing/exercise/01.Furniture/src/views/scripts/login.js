import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import furnitureServices from '../../services/furnitureServices.js';


const containerTemplate = () => html `
 <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form id="loginForm">
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
    </div>
`;


let rootElement = document.getElementById('root');

export default function(context) {
    render(containerTemplate(), rootElement);

    let loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget)
        furnitureServices.loginFetch(formData)
        context.page.redirect('/home');
        console.log(context);
    })
}