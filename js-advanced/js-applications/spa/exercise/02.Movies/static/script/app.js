import { setupCreate, showCreate } from './createMovie.js'
import { setupHome, showHome } from './home.js'
import { setupDetails, showDetails } from './details.js'
import { setupRegister, showRegister } from './register.js'
import { setupEdit } from './editMovie.js'
import { setupLogin, showLogin } from './login.js'

const main = document.querySelector('main')

const links = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
    'createLink': showCreate
}

setupSection('home-page', setupHome);
setupSection('add-movie', setupCreate);
setupSection('movie-details', setupDetails);
setupSection('edit-movie', setupEdit);
setupSection('form-login', setupLogin);
setupSection('form-sign-up', setupRegister);

setupNavigation()
showHome()

function setupSection(sectionId, setup) {
    const section = document.getElementById(sectionId)
    setup(main, section)
}

function setupNavigation() {
    const email = localStorage.getItem('email');
    if (email != null) {
        document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;
        [...document.querySelectorAll('nav .user')].forEach(link => link.style.display = 'block');
        [...document.querySelectorAll('nav .guest')].forEach(link => link.style.display = 'none');
    } else {
        [...document.querySelectorAll('nav .user')].forEach(link => link.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(link => link.style.display = 'block');
    }

    document.querySelector('nav').addEventListener('click', (e) => {
        const view = links[e.target.id];
        if (typeof view == 'function') {
            e.preventDefault();
            view();
        }
    })
    document.getElementById('createLink').addEventListener('click', (e) => {
        e.preventDefault();
        showCreate();
    })

    logoutBtn.addEventListener('click', () => {
        fetch(`http://localhost:3030/users/logout`, {
                method: 'GET',
                headers: {
                    'X-Authorization': localStorage.getItem('auth_token')
                }
            })
            .then(() => {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('userId');
                localStorage.removeItem('email');
                setupNavigation();
            })
            .catch((err) => console.log(err.message));
    });
}