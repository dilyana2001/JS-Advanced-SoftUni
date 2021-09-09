import { html } from "../../node_modules/lit-html/lit-html.js"

const showUserInfo = (email) => html `
 <span>Welcome ${email}</span>
`;

const guestButtons = (pathname) => html `
        <a class="nav-link ${pathname =='/login' ? ' active' : ''}" href="/login">Login</a>
        <a class="nav-link ${pathname =='/register' ? ' active' : ''}" href="/register">Register</a>
`;

const privateButtons = (pathname) => html `
         <a class="nav-link ${pathname =='/myMovies' ? ' active' : ''}" href="/myMovies">My movies</a>
         <a class="nav-link ${pathname =='/movies/add' ? ' active' : ''}" href="/movies/add">Add Movie</a>
         <a class="nav-link" href="/logout">Logout</a>
`;

const navigationTemplate = (pathname, isAuthenticated, email) => html `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container-fluid">
             <a class="navbar-brand" href="/">
                 <h1>MovieDB</h1>
             </a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
             <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div class="navbar-nav">
                     <a class="nav-link ${pathname =='/' ? ' active' : ''}" aria-current="page" href="/">Home</a>
                     <a class="nav-link ${pathname =='/movies' ? ' active' : ''}" href="/movies">Movies</a>
                     ${isAuthenticated ? privateButtons(pathname) : guestButtons(pathname)}
                 </div>
             </div>
             ${isAuthenticated && showUserInfo(email)}
         </div>
  </nav>`;


export function renderNavigation(context) {
    return navigationTemplate(context.pathname, context.isAuthenticated, context.email)
}