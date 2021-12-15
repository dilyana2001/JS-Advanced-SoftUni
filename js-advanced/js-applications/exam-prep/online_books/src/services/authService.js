import { getUserData } from '../util.js';
const baseUrl = 'http://localhost:3030';

function login(data) {
    return fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

function register(data) {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

function logout() {
        const userData = getUserData();
    return fetch(`${baseUrl}/users/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': userData.token
        }
    })
        .catch(err => console.log(err.message));
}

export default {
    login,
    register,
    logout,
}