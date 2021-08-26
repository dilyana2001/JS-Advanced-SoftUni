import { showHome } from './home.js';

let main;
let section;

export function setupLogin(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    document.querySelector('#form-login form').addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        if (formData.get('email') == '' || formData.get('password') == '') {
            return alert(`All fields are required!`)
        }
        fetch(`http://localhost:3030/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password')
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data.code != 403) {
                    localStorage.setItem('auth_token', data.accessToken);
                    localStorage.setItem('userId', data._id);
                    localStorage.setItem('email', data.email);

                    document.getElementById('welcome-msg').textContent = `Welcome, ${data.email}`;

                    [...document.querySelectorAll('nav .user')].forEach(link => link.style.display = 'block');
                    [...document.querySelectorAll('nav .guest')].forEach(link => link.style.display = 'none');
                    showHome();
                } else {
                    alert(data.message)
                }
            })
            .catch(err => alert(err.message));
    })
}

export async function showLogin() {
    main.innerHTML = '';
    main.appendChild(section);
}