import { render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import util from './util.js';
import authService from './src/services/authService.js';

import dashboardView from './src/views/dashboardView.js';
import detailsView from './src/views/detailsView.js';
import loginView from './src/views/loginView.js';
import registerView from './src/views/registerView.js';

const root = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(decorateContext);

page('/', dashboardView);
page('/home', dashboardView);
page('/details/:bookId', detailsView)
page('/login', loginView);
page('/register', registerView);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

async function onLogout() {
    authService.logout();
    updateUserNav();
    page.redirect('/');
}

function updateUserNav() {
    const userData = util.getUserData();

    if (userData) {
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}