import { render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import utils from './utils.js';
import service from './src/service/service.js';

import homeView from './src/views/homeView.js';
import loginView from './src/views/loginView.js';
import registerView from './src/views/registerView.js';
import catalogView from './src/views/catalogView.js';
import createView from './src/views/createView.js';
import detailsView from './src/views/detailsView.js';
import editView from './src/views/editView.js';
import searchView from './src/views/searchView.js'

const root = document.getElementById('main-content');
document.querySelector('#box header nav ul li:nth-child(6)').addEventListener('click', onLogout);

page(decorateContext);

page('/', homeView);
page('/catalog', catalogView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/details/:albumId', detailsView);
page('/edit/:albumId', editView);
page('/search', searchView);


page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    const userData = utils.getUserData();
    userData !== null ? ctx.userData = userData : '';
    updateUserNav(userData);
    next();
}

function updateUserNav(userData) {
    if (userData) {
        document.querySelector('header nav ul li:nth-child(3)').style.display = 'none';
        document.querySelector('header nav ul li:nth-child(4)').style.display = 'none';
        document.querySelector('header nav ul li:nth-child(5)').style.display = 'inline';
        document.querySelector('header nav ul li:nth-child(6)').style.display = 'inline';

    } else {
        document.querySelector('header nav ul li:nth-child(3)').style.display = 'inline';
        document.querySelector('header nav ul li:nth-child(4)').style.display = 'inline';
        document.querySelector('header nav ul li:nth-child(5)').style.display = 'none';
        document.querySelector('header nav ul li:nth-child(6)').style.display = 'none';
    }
}

function onLogout() {
    service.logout();
    utils.clearUserData();
    updateUserNav();
    page.redirect('/')
}