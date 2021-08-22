import { isAuthenticated } from './auth.js';
import loginPage from './loginPage.js';
import moviesPage from './moviesPage.js';
import registerPage from './registerPage.js';
import navigation from './navigation.js'



let headerElement = document.querySelector('.header .nav');

let pages = {
    register: registerPage,
    login: loginPage,
    movies: moviesPage

}

navigation.updateNavigation();
if (isAuthenticated()) {
    moviesPage.showPage();
}

headerElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName == 'A') {
        let dataLink = e.target.getAttribute('data-link');
        navigation.updateNavigation();
        if (Object.keys(pages).includes(dataLink)) {
            hidePages()
            let currentWiew = pages[dataLink];
            currentWiew.showPage()
        }
    }
})

function hidePages() {
    Object.values(pages).forEach(x => x.hidePage())
}