const baseUrl = 'http://localhost:3030';
const logoutBtn = document.getElementById('logoutBtn');
const tbody = document.getElementById('tbody-logged');
const createFurniture = document.getElementById('create-furniture');
const deleteBtn = document.getElementById('deleteBtn')

logoutBtn.addEventListener('click', () => {
    fetch(`${baseUrl}/users/logout`, {
            method: 'GET',
            headers: {
                'X-Authorization': getToken()
            }
        })
        .then(response => response.json())
        .then(data => {
            localStorage.removeItem('auth_token');
            window.location.pathname = 'index.html';
        })
        .catch((err) => console.log(err.message));
});

createFurniture.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    fetch(`${baseUrl}/data/furniture`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify({
                name: formData.get('name'),
                price: formData.get('price'),
                factor: formData.get('factor'),
                img: formData.get('img'),
            })
        })
        .then(response => response.json())
        .then(data => showAllFurniture())
        .catch((err) => console.log(err.message));
    createFurniture.reset()
})


deleteBtn.addEventListener('click', () => {
    fetch(`${baseUrl}/data/furniture`)
        .then(response => response.json())
        .then(result => {
            Object.values(result).forEach(x => {
                fetch(`${baseUrl}/data/furniture/` + x._id, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Authorization': getToken()
                        }
                    })
                    .then(response => response.json())
                    .then(data => showAllFurniture())
                    .catch(() => console.log(`Error with deleting furnitures`))
            })
        })
})


function showAllFurniture() {
    tbody.textContent = '';
    fetch(`${baseUrl}/data/furniture`)
        .then(response => response.json())
        .then(result => {
            Object.values(result).forEach(x => {
                const furnitureTh = document.createElement('tr');
                const imgTh = document.createElement('td');
                const nameTh = document.createElement('td');
                const priceTh = document.createElement('td');
                const factorTH = document.createElement('td');
                const markInput = document.createElement('input');
                imgTh.setAttribute('src', x.img)
                nameTh.textContent = x.name;
                priceTh.textContent = x.price;
                factorTH.textContent = x.factor;
                markInput.setAttribute('type', 'checkbox')
                tbody.appendChild(furnitureTh);
                furnitureTh.appendChild(imgTh);
                furnitureTh.appendChild(nameTh);
                furnitureTh.appendChild(priceTh);
                furnitureTh.appendChild(factorTH);
                furnitureTh.appendChild(markInput);
            });
        })
        .catch(() => console.log(`Error`));
}
showAllFurniture()

function getToken() {
    let token = localStorage.getItem('auth_token');
    return token;
}