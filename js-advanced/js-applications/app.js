import { render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import authService from './src/services/authService.js';
import util from './src/util.js';

import dashboardView from './src/views/dashboardView.js';
import detailsView from './src/views/detailsView.js';
import loginView from './src/views/loginView.js';
import registerView from './src/views/registerView.js';
import addNewBookView from './src/views/addNewBookView.js';
import myBooksView from './src/views/myBooksView.js';
import editBookView from './src/views/editBookView.js';

const root = document.getElementById('site-content');
document.querySelector('.logoutBtn').addEventListener('click', onLogout);

page(decorateContext);

page('/', dashboardView);
page('/details/:bookId', detailsView);
page('/login', loginView);
page('/register', registerView);
page('/add', addNewBookView);
page('/my-books/', myBooksView);
page('/edit/:bookId', editBookView);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    const userData = util.getUserData();
    userData !== null ? ctx.userData = userData : '';
    updateUserNav(userData);
    next();
}

function updateUserNav() {
    const userData = util.getUserData();

    if (userData) {
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}

function onLogout() {
    authService.logout();
    util.clearUserData();
    updateUserNav();
    page.redirect('/')
}