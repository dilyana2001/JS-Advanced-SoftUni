import { render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import utils from './src/utils.js'

import service from './src/service/service.js';
import catalogView from './views/catalogView.js';
import detailsView from './views/detailsView.js';
import homeView from './views/homeView.js';
import loginView from './views/loginView.js';
import registerView from './views/registerView.js';

const root = document.getElementById('main-content');
document.querySelector('.logoutBtn').addEventListener('click', onLogout);

page(decorateContext);

page('/', catalogView);
page('/catalog', homeView);
page('/register', registerView);
page('/login', loginView);
page('/details/:gameId', detailsView);

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next();
}

function updateUserNav() {
    const userData = utils.getUserData();

    if (userData != null) {
        console.log(`userData true`)
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
        // document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;
    } else {
        console.log(`userData false`)
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}

function onLogout() {
    service.logout();
    utils.clearUserData();
    updateUserNav();
    page.redirect('/')
}