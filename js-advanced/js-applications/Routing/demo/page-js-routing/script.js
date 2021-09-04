import page from './node_modules/page/page.mjs';
import home from './src/views/home.js';
import pricing from './src/views/pricing.js';
import about from './src/views/about.js';
import articles from './src/views/articles.js';
import articleView from './src/views/articleView.js';

page('/', '/home');
page('/home', home);
page('/pricing', pricing);
page('/about', about);
page('/articles', articles);
page('/articles/:id', articleView);




page.start();