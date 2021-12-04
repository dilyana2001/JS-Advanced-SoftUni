const baseUrl = 'http://localhost:3030';
import utils from "../utils.js";
const userData = utils.getUserData();

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
    return fetch(`${baseUrl}/users/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

function getAll() {
    return fetch(`${baseUrl}/data/games?sortBy=_createdOn%20desc`)
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

function currentGames() {
    return fetch(`${baseUrl}/data/games?sortBy=_createdOn%20desc&distinct=category`)
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

function getGameById(id) {
    return fetch(`${baseUrl}/data/games/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

function getComments(id) {
    return fetch(`${baseUrl}/data/comments?where=gameId%3D%22${id}%22`)
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

function postComment(id, comment) {
    return fetch(`${baseUrl}/data/comments/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err.message));
}



export default {
    login,
    register,
    logout,
    getAll,
    currentGames,
    getGameById,
    getComments,
    postComment,
}