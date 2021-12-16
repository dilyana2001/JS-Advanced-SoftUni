const baseUrl = 'http://localhost:3030';
import utils from '../utils.js';

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
    console.log(userData)
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
    return fetch(`${baseUrl}/data/cars?sortBy=_createdOn%20desc`)
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

function createCar(data) {
    const userData = utils.getUserData();
    return fetch(`${baseUrl}/data/cars`, {
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


function getCarById(id) {
    return fetch(`${baseUrl}/data/cars/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

function deleteCarById(id) {
    const userData = utils.getUserData();
    return fetch(`${baseUrl}/data/cars/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        }
    })
        .catch(err => console.log(err.message));
}


function getMyCars(userId) {
    const userData = utils.getUserData();
    return fetch(`${baseUrl}/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        }
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message))
}

function editCar(id, data) {
    const userData = utils.getUserData();
    return fetch(`${baseUrl}/data/cars/${id}`, {
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

function searchByYear(query) {
    return fetch(`${baseUrl}/data/cars?where=year%3D${query}`)
        .then(res => res.json())
        .catch((err) => console.log(err.message))
}


export default {
    login,
    register,
    logout,
    getAll,
    getCarById,
    deleteCarById,
    createCar,
    getMyCars,
    editCar,
    searchByYear,
}