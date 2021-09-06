import page from './node_modules/page/page.mjs';

import home from './src/views/scripts/home.js';
import create from './src/views/scripts/create.js';
import details from './src/views/scripts/details.js';
import edit from './src/views/scripts/edit.js';
import login from './src/views/scripts/login.js';
import logout from './src/views/scripts/logout.js'
import myFurniture from './src/views/scripts/myFurniture.js';
import register from './src/views/scripts/register.js';
// import catalog from './src/views/scripts/catalog.js';


page('/', '/home');
page('/home', home);
page('/create', create);
page('/login', login);
page('/logout', logout);
page('/details/:id', details);
page('/edit/:id', edit);
page('/myFurniture', myFurniture);
page('/register', register);
// page('/catalog', catalog);

page.start();