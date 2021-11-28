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

export default {
    getAll,
    getBookById,
}