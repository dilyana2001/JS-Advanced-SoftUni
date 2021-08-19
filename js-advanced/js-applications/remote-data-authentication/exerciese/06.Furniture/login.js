function solve() {
    const baseUrl = 'http://localhost:3030';
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        if (formData.get('password') != '' && formData.get('email') != '') {
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
                    if (data.code != 403) {
                        saveToken(data.accessToken);
                        window.location.pathname = '/homeLogged.html';
                    } else {
                        console.log(data.message);
                    }
                })
                .catch((err) => console.log(err.message));
        } else {
            console.log(`Try again!`);
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        if (formData.get('rePass') === formData.get('password') && formData.get('password') != '') {
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
                    saveToken(data.accessToken);
                    window.location.pathname = '/homeLogged.html'
                })
                .catch((err) => console.log(err.message));
        } else {
            console.log(`Try again!`);
        }
    });

    function saveToken(token) {
        localStorage.setItem('auth_token', token);
    }
}

solve()