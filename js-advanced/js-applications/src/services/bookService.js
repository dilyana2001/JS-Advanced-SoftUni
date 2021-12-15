import util from '../util.js';
const baseUrl = 'http://localhost:3030';

function getAll() {
    return fetch(`${baseUrl}/data/books?sortBy=_createdOn%20desc`)
        .then(res => res.json())
        .catch(err => console.log(err.message));
}


function getBookById(id) {
    return fetch(`${baseUrl}/data/books/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err.message));
}


function createBook(data) {
    const userData = util.getUserData();
    return fetch(`${baseUrl}/data/books`, {
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


function getMyBooks(userId) {
    return fetch(`${baseUrl}/data/books?where=_ownerId%3D%22${userId}%22&amp;sortBy=_createdOn%20desc`)
        .then(res => res.json())
        .catch(err => console.log(err.message));
}


function editBook(id, data) {
    const userData = util.getUserData();
    return fetch(`${baseUrl}/data/books/${id}`, {
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

function deleteBookById(id) {
    const userData = util.getUserData();
    return fetch(`${baseUrl}/data/books/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        }
    });
}

export default {
    getAll,
    getBookById,
    createBook,
    getMyBooks,
    editBook,
    deleteBookById,
}