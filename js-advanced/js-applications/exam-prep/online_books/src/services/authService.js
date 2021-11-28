import util from '../util.js';
const baseUrl = 'http://localhost:3030';

function login(formData) {
    return fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password')
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.code == 403) {
                return alert(data.message);
            }
            const userData = {
                email: data.email,
                userId: data._id,
                token: data.accessToken
            };
            util.setUserData(userData);
        })
        .catch(err => console.log(err.message));
}

function register(formData) {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password')
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.code == 409 || data.code == 403) {
                return alert(data.message);
            }
            const userData = {
                email: data.email,
                userId: data._id,
                token: data.accessToken
            };
            util.setUserData(userData);
        })
        .catch(err => console.log(err.message));
}

function logout() {
    return null;
}

export default {
    login,
    register,
    logout,
}