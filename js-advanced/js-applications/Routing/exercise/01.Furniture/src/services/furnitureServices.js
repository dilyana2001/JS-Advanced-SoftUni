function getAllFurnitures() {
    return fetch(`http://localhost:3030/data/catalog`)
        .then(res => res.json())
}

function getMyFurnitures(userId) {
    return fetch(`http://localhost:3030/data/catalog?where=_ownerId%3D%22${userId}%22`)
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
    return getFurnitureById(id)
        .then(result => {
            return fetch(`http://localhost:3030/data/catalog/${result._id}`, {
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
        })
        .catch((err) => console.log(err.message));
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

function registerFetch(formData) {
    if (formData.get('rePass') !== formData.get('password')) {
        return alert(`Password don't match!`);
    } else if (formData.get('password') == '' || formData.get('email') == '') {
        return alert(`All fields are required!`)
    }
    return fetch(`http://localhost:3030/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
                rePass: formData.get('rePass')
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.code != 403 && data.code != 409) {
                localStorage.setItem('auth_token', data.accessToken);
                localStorage.setItem('userId', data._id);

                [...document.querySelectorAll('nav #user')].forEach(link => link.style.display = 'block');
                [...document.querySelectorAll('nav #guest')].forEach(link => link.style.display = 'none');
            } else {
                alert(data.message);
            }
        })
        .catch(err => alert(err.message));
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
            if (data.code != 403) {
                localStorage.setItem('auth_token', data.accessToken);
                localStorage.setItem('userId', data._id);

                [...document.querySelectorAll('nav #user')].forEach(link => link.style.display = 'block');
                [...document.querySelectorAll('nav #guest')].forEach(link => link.style.display = 'none');
            } else {
                alert(data.message)
            }
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
    getMyFurnitures,
    deleteFurnitureById,
    getAllFurnitures,
    postFurniture,
    loginFetch,
    registerFetch,
    logout,
}