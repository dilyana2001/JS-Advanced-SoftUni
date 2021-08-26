import { showHome } from './home.js';

let main;
let section;

export function setupRegister(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    document.querySelector('#form-sign-up form').addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        if (formData.get('repeatPassword') !== formData.get('password')) {
            return alert(`Password don't match!`);
        } else if (formData.get('password') == '' || formData.get('password').length < 3 || formData.get('email') == '') {
            return alert(`All fields are required! You're password need to be longer than two symbols!`)
        }
        fetch(`http://localhost:3030/users/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password'),
                    rePass: formData.get('repeatPassword')
                })
            })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                if (data.code != 403 && data.code != 409) {
                    localStorage.setItem('auth_token', data.accessToken);
                    localStorage.setItem('userId', data._id);
                    localStorage.setItem('email', data.email);

                    document.getElementById('welcome-msg').textContent = `Welcome, ${data.email}`;

                    [...document.querySelectorAll('nav .user')].forEach(link => link.style.display = 'block');
                    [...document.querySelectorAll('nav .guest')].forEach(link => link.style.display = 'none');
                    showHome();
                } else {
                    alert(data.message);
                }
            })
            .catch(err => alert(err.message));
    });

}

export async function showRegister() {
    main.innerHTML = '';
    main.appendChild(section);
}