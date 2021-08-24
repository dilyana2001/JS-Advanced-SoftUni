import { showHome } from './home.js';

let main;
let section;

export function setupLogin(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    document.querySelector('#form-login form').addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        if (formData.get('email') != '' && formData.get('password')) {
            fetch(`http://localhost:3030/users/login`, {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({
                        email: formData.get('email'),
                        password: formData.get('password')
                    })
                })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('auth_token', data.accessToken);
                    localStorage.setItem('userId', data._id);
                    localStorage.setItem('email', data.email);

                    document.getElementById('welcome-msg').textContent = `Welcome, ${data.email}`;

                    [...document.querySelectorAll('nav .user')].forEach(link => link.style.display = 'block');
                    [...document.querySelectorAll('nav .guest')].forEach(link => link.style.display = 'none');

                    showHome();
                })
                .catch(err => console.log(err.message));
        }
    })
}

export async function showLogin() {
    main.innerHTML = '';
    main.appendChild(section);
}