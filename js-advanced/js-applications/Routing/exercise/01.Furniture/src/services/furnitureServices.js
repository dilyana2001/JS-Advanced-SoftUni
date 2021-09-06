function getAllFurnitures() {
    return fetch(`http://localhost:3030/data/catalog`)
        .then(res => res.json())
}

function getFurnitureById(id) {
    return fetch(`http://localhost:3030/data/catalog/${id}`)
        .then(res => res.json())
}

function postFurniture(formData) {
    return fetch(`http://localhost:3030/data/catalog`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('auth_token')
            },
            body: JSON.stringify({
                make: formData.get('make'),
                model: formData.get('model'),
                year: formData.get('year'),
                description: formData.get('description'),
                price: formData.get('price'),
                image: formData.get('img'),
                material: formData.get('material'),
            })
        })
        .then(res => res.json())
}

function editFurnitureById(id, formData) {
    return fetch(`http://localhost:3030/data/catalog/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('auth_token')
            },
            body: JSON.stringify({
                make: formData.get('make'),
                model: formData.get('model'),
                year: formData.get('year'),
                description: formData.get('description'),
                price: formData.get('price'),
                image: formData.get('img'),
                material: formData.get('material'),
            })
        })
        .then(res => res.json())
}

function deleteFurnitureById(id) {
    return fetch(`http://localhost:3030/data/catalog/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('auth_token')
            }
        })
        .then(res => res.json())
}

function loginFetch(formData) {
    if (formData.get('email') == '' || formData.get('password') == '') {
        return alert(`All fields are required!`)
    }
    return fetch(`http://localhost:3030/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password')
            })
        })
        .then(res => res.json())
        .then(data => {

            localStorage.setItem('auth_token', data.accessToken);
            localStorage.setItem('userId', data._id);
            localStorage.setItem('email', data.email);

            [...document.querySelectorAll('nav #user')].forEach(link => link.style.display = 'block');
            [...document.querySelectorAll('nav #guest')].forEach(link => link.style.display = 'none');

        })
        .catch(err => alert(err.message));
}

function logout() {
    return fetch(`http://localhost:3030/users/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': localStorage.getItem('auth_token')
        }
    })
}

export default {
    editFurnitureById,
    getFurnitureById,
    deleteFurnitureById,
    getAllFurnitures,
    postFurniture,
    loginFetch,
    logout,
}