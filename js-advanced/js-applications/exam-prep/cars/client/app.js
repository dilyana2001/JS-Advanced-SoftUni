import { render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import utils from './utils.js';
import service from './services/service.js';

import home from './views/home.js';
import login from './views/login.js';
import register from './views/register.js';
import catalog from './views/catalog.js';
import details from './views/details.js';
import create from './views/create.js';
import myCatalog from './views/myCatalog.js'
import edit from './views/edit.js';
import search from './views/search.js';

const root = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);

page('/', home);
page('/login', login);
page('/register', register);
page('/catalog', catalog);
page('/details/:carId', details);
page('/create', create);
page('/myCatalog', myCatalog)
page('/edit/:carId', edit);
page('/search', search);


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
        document.getElementById('guest').style.display = 'none';
        document.getElementById('profile').style.display = 'inline';
        document.querySelector('span').textContent = `Welcome, ${userData.username}`;
    } else {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = 'inline';
    }
}

function onLogout() {
    const userData = utils.getUserData();
    service.logout();
    utils.clearUserData();
    updateUserNav(userData);
    page.redirect('/')
}