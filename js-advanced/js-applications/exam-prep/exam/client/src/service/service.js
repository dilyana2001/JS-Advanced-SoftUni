const baseUrl = 'http://localhost:3030';
import utils from '../../utils.js';

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
const userData = utils.getUserData();
    return fetch(`${baseUrl}/users/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        }
    })
        .catch(err => console.log(err.message));
}

function getAll() {
    return fetch(`${baseUrl}/data/albums?sortBy=_createdOn%20desc&distinct=name`)
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

function createAlbum(data) {
const userData = utils.getUserData();
    return fetch(`${baseUrl}/data/albums`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message))
}


function getAlbumById(id) {
const userData = utils.getUserData();
    return fetch(`${baseUrl}/data/albums/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

function deleteAlbumById(id) {
const userData = utils.getUserData();
    return fetch(`${baseUrl}/data/albums/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        }
    })
        .catch(err => console.log(err.message));
}

function editAlbumById(id, data) {
const userData = utils.getUserData();
    return fetch(`${baseUrl}/data/albums/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message))
}

function searchByName(query) {
    return fetch(`${baseUrl}/data/albums?where=name%20LIKE%20%22${query}%22`)
        .then(res => res.json())
        .catch((err) => console.log(err.message))
}


export default {
    login,
    register,
    logout,
    getAll,
    createAlbum,
    getAlbumById,
    deleteAlbumById,
    editAlbumById,
    searchByName,
}