let baseUrl = 'http://localhost:3030';

function getAllBooksService() {
    return fetch(`${baseUrl}/jsonstore/collections/books`)
        .then(res => res.json())
}

function deleteBookService(id) {
    return fetch(`${baseUrl}/jsonstore/collections/books/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function editBookService(id, data) {
    return fetch(`${baseUrl}/jsonstore/collections/books/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: data.title,
            author: data.author
        })
    })
}

function addBookService(data) {
    return fetch(`${baseUrl}/jsonstore/collections/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: data.title,
            author: data.author
        })
    })
}

export default {
    getAllBooksService,
    deleteBookService,
    editBookService,
    addBookService,
}