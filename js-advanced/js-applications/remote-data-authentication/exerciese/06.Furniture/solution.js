function solve() {
    const tbodyHomePage = document.getElementById('tbody-home-page');
    const baseUrl = 'http://localhost:3030/';
    const guestHomePage = document.getElementById('guest-home-page')

    fetch(`${baseUrl}data/furniture`)
        .then(response => response.json())
        .then(result => {
            Object.entries(result).forEach(x => {
                const furnitureTh = document.createElement('tr');
                const imgTh = document.createElement('td');
                const nameTh = document.createElement('td');
                const priceTh = document.createElement('td');
                const factorTH = document.createElement('td');
                const markInput = document.createElement('input');

                imgTh.src = x.img;
                nameTh.textContent = x.name;
                priceTh.textContent = x.price;
                factorTH.textContent = x.decFactor;

                tbodyHomePage.appendChild(furnitureTh);
                furnitureTh.appendChild(imgTh);
                furnitureTh.appendChild(nameTh);
                furnitureTh.appendChild(priceTh);
                furnitureTh.appendChild(factorTH);
                furnitureTh.appendChild(markInput);
            });
        });





}

solve();























// async function request(url, options) {
//     const response = await fetch(url, options);
//     if (response.ok != true) {
//         const error = await response.json();
//         alert(error.message);
//         throw new Error(error.message);
//     }
//     const data = await response.json();
//     return data;
// }

// function start() {
//     document.getElementById('createBtn').addEventListener('submit', createFurniture);


//     getAllBooks();
// }

// start();

// async function getAllFurnitures() {
//     const furnitures = await request('http://localhost:3030/data/furniture');
//     const rows = Object.entries(furnitures).map(createRow).join('')
//     document.querySelector('tbody').innerHTML = rows;

//     function createRow([id, furniture]) {
//         const result = `
//       <tr data-id="${id}">
//           <td>${furniture.img}</td>  
//           <td>${furniture.name}</td>
//           <td>${furniture.price}</td>
//           <td>${furniture.factor}</td>
//           <td>
//           <input type="checkbox" disabled/>
//           </td>
//       </tr>`;
//         return result;
//     }
// }

// async function createFurniture(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const furniture = {
//         img: formData.get('img'),
//         name: formData.get('name'),
//         price: formData.get('price'),
//         factor: formData.get('factor')
//     };

//     await request('http://localhost:3030/data/furniture', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(furniture)
//     });

//     event.target.reset();
//     getAllFurnitures();
// }
// getAllFurnitures();

// function login() {
//     const form = document.getElementById('login-form');

//     // form.addEventListener('submit', (ev => {
//     //     ev.preventDefault();
//     //     const formData = new FormData(ev.target);
//     //     const dataForm = {
//     //         email: formData.get('email'),
//     //         password: formData.get('password')
//     //     }
//     //     onSubmit(dataForm);
//     // }));


//     form.addEventListener('submit', (e) => {
//         e.preventDefault()
//         let formData = new FormData(e.target)

//         console.log([...formData.entries()])
//         console.log(formData.get('password'))

//         fetch(`${baseUrl}/users/login`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     email: formData.get('email'),
//                     password: formData.get('password')
//                 })
//             })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.status == 200) {
//                     saveToken(data.accessToken)
//                     window.location.pathname = '/homeLogged.html';
//                 } else {
//                     throw new Error(data.message);
//                 }
//             })
//             .catch(() => console.log(`error loginForm`))

//     })

//     // async function onSubmit(data) {
//     //     const body = JSON.stringify({
//     //         email: data.email,
//     //         password: data.password,
//     //     });

//     //     try {
//     //         const response = await fetch('http://localhost:3030/users/login', {
//     //             method: 'post',
//     //             headers: {
//     //                 'Content-Type': 'application/json'
//     //             },
//     //             body
//     //         });
//     //         const data = await response.json();
//     //         if (response.status == 200) {
//     //             sessionStorage.setItem('authToken', data.accessToken);
//     //             window.location.pathname = '/homeLogged.html';
//     //         } else {
//     //             throw new Error(data.message);
//     //         }
//     //     } catch (err) {
//     //         console.error(err.message);
//     //     }
//     // }
// }
// login()



// function register() {
//     const form = document.querySelector('register-form');

//     form.addEventListener('submit', (ev => {
//         ev.preventDefault();
//         const formData = new FormData(ev.target);

//         onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, {
//             [k]: v
//         }), {}));
//     }));
//     async function onSubmit(data) {
//         if (data.password != data.rePass) {
//             return console.error('Passwords don\'t match');
//         }

//         const body = JSON.stringify({
//             email: data.email,
//             password: data.password,
//         });

//         try {
//             const response = await fetch('http://localhost:3030/users/register', {
//                 method: 'post',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body
//             });
//             const data = await response.json();
//             if (response.status == 200) {
//                 sessionStorage.setItem('authToken', data.accessToken);
//                 window.location.pathname = 'home.html';
//             } else {
//                 throw new Error(data.message);
//             }
//         } catch (err) {
//             console.error(err.message);
//         }
//     }
// }



// async function logout() {
//     const response = await fetch('http://localhost:3030/users/logout', {
//         method: 'get',
//         headers: {
//             'X-Authorization': sessionStorage.getItem('authToken')
//         },
//     });
//     if (response.status == 200) {
//         sessionStorage.removeItem('authToken');
//         window.location.pathname = 'home.html';
//     } else {
//         console.error(await response.json());
//     }
// }