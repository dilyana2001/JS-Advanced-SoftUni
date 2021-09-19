import { authMiddlewear } from './middlewares/authMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

import page from '../node_modules/page/page.mjs';

import { homePage } from './views/homeView.js';
import { moviePage, myMoviePage } from './views/movieView.js';
import { loginPage } from './views/loginView.js';
import { logoutUser } from './views/logout.js';
import { registerPage } from './views/registerView.js';
import { detailsPage } from './views/detailsView.js';
import { addMoviePage } from './views/addMovieView.js'
import { editMoviePage } from './views/editMovieView.js';
// import { deletedView } from './views/deletedView.js';
import { deleteMoviePage } from './views/deleteMoviePageConfirmed.js'
import { yourCreateisReadyView } from './views/yourCreateIsReadyView.js';



page(authMiddlewear)
page(renderMiddleware);

page('/', homePage);
page('/movies', moviePage);
page('/myMovies', myMoviePage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/delete-movie', deleteMoviePage);
page('/delete-movie/:id', deleteMoviePage)
page('/details/:id/edit', editMoviePage);
page('/movies/add', addMoviePage);
page('/movie-created', yourCreateisReadyView)
page('/logout', logoutUser);




page.start();