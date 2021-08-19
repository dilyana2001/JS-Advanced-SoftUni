function solve() {
    const baseUrl = 'http://localhost:3030';
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        fetch(`${baseUrl}/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password')
                })
            })
            .then(response => response.json())
            .then(data => {
                window.location.pathname = '/homeLogged.html'
                localStorage.setItem('auth_token', data.accessToken)
            })
            .catch(() => console.log(`Error with login form`));
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        if (formData.get('rePass') === formData.get('password')) {
            fetch(`${baseUrl}/users/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: formData.get('email'),
                        password: formData.get('password'),
                        rePass: formData.get('rePass')
                    })
                })
                .then(response => response.json())
                .then(data => {
                    window.location.pathname = '/homeLogged.html'
                    localStorage.setItem('auth_token', data.accessToken)
                })
                .catch(() => console.log(`Error with register form`));
        } else {
            console.log(`Try again!`);
        }
    });
}

solve()