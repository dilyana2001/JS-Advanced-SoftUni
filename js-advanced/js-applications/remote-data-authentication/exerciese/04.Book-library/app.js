let addBookForm = document.getElementById('add-book');
let editBookForm = document.getElementById('edit-book');
let loadBooks = document.getElementById('loadBooks');
let books = document.querySelector('table tbody');
let baseUrl = 'http://localhost:3030/';
let addBookTitle = document.querySelector('#add-book input[name=title]');
let addBookAuthor = document.querySelector('#add-book input[name=author]');
let editBookTitle = document.querySelector('#edit-book input[name=title]');
let editBookAuthor = document.querySelector('#edit-book input[name=author]');

loadBooks.addEventListener('click', () => {
    books.textContent = '';
    fetch(`${baseUrl}jsonstore/collections/books/`)
        .then(res => res.json())
        .then(result => {
            Object.values(result).forEach(x => {
                let tr = document.createElement('tr');
                let bookHeader = document.createElement('td');
                let bookAuthor = document.createElement('td');
                let tdButtons = document.createElement('td');
                let editButton = document.createElement('button');
                let deleteButton = document.createElement('button');

                bookHeader.textContent = x.title;
                bookAuthor.textContent = x.author;
                editButton.textContent = `Edit`;
                editButton.addEventListener('click', () => {
                    addBookForm.setAttribute('class', 'hide');
                    editBookForm.setAttribute('class', '');

                    editBookForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        editBookTitle.textContent = '';
                        editBookAuthor.textContent = '';

                        fetch(`${baseUrl}jsonstore/collections/books/${x._id}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-type': 'application/json'
                                },
                                body: JSON.stringify({
                                    title: editBookTitle.value,
                                    author: editBookAuthor.value,
                                })
                            })
                            .then(re => re.json())
                            .then(res => {
                                console.log(res)
                            })
                            .catch(() => console.log(`error`))
                        addBookForm.setAttribute('class', '');
                        editBookForm.setAttribute('class', 'hide');
                    })
                })

                deleteButton.textContent = `Delete`;
                deleteButton.addEventListener('click', () => {
                    fetch(`${baseUrl}jsonstore/collections/books/${x._id}`, {
                            method: 'DELETE'
                        })
                        .then(re => re.json())
                        .then(res => {
                            console.log(res)
                        })
                        .catch(() => console.log(`error`))

                })

                books.appendChild(tr);
                tr.appendChild(bookHeader);
                tr.appendChild(bookAuthor);
                tr.appendChild(tdButtons);
                tdButtons.appendChild(editButton);
                tdButtons.appendChild(deleteButton);
            })
        })
})

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`${baseUrl}jsonstore/collections/books/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: addBookTitle.value,
                author: addBookAuthor.value,
            })
        })
        .then(re => re.json())
        .then(res => {
            console.log(res)
        })
        .catch(() => console.log(`error`))
    addBookTitle.value = '';
    addBookAuthor.value = '';
})








//OTHER still broken solution

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

// async function getAllBooks() {
//     const books = await request('http://localhost:3030/jsonstore/collections/books');
//     const rows = Object.entries(books).map(createRow).join('');
//     document.querySelector('tbody').innerHTML = rows;

//     function createRow([id, book]) {
//         const result = `
//         <tr data-id="${id}">
//             <td>${book.title}</td>  
//             <td>${book.author}</td>
//             <td>
//                 <button class="editBtn">Edit</button>
//                 <button class="deleteBtn">Delete</button>
//             </td>
//         </tr>`;
//         return result;
//     }
// }

// async function createBook(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const book = {
//         title: formData.get('title'),
//         author: formData.get('author')
//     };

//     await request('http://localhost:3030/jsonstore/collections/books', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(book)
//     });

//     event.target.reset();
//     getAllBooks();
// }

// async function updateBook(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const id = formData.get('id')
//     const book = {
//         title: formData.get('title'),
//         author: formData.get('author')
//     };

//     await request('http://localhost:3030/jsonstore/collections/books' + id, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(book)
//     });
//     document.getElementById('add-book').style.display = 'block';
//     document.getElementById('edit-book').style.display = 'none';

//     event.target.reset();
//     getAllBooks();
// }

// async function deleteBook(id) {
//     await request('http://localhost:3030/jsonstore/collections/books' + id, {
//         method: 'DELETE'
//     });

//     getAllBooks();
// }

// function start() {
//     document.getElementById('loadBooks').addEventListener('click', getAllBooks);
//     document.getElementById('add-book').addEventListener('submit', createBook);
//     document.getElementById('edit-book').addEventListener('submit', updateBook);
//     document.querySelector('#edit-book [type="button"]').addEventListener('click', (event) => {
//         document.getElementById('add-book').style.display = 'block';
//         document.getElementById('edit-book').style.display = 'none';
//         event.target.reset();
//     });
//     document.querySelector('table').addEventListener('click', handleTableClick);

//     getAllBooks();
// }

// start();

// function handleTableClick(event) {
//     if (event.target.className == 'editBtn') {
//         document.getElementById('add-book').style.display = 'none';
//         document.getElementById('edit-book').style.display = 'block';
//         const bookId = event.target.parentNode.parentNode.dataset.id;
//         loadBookForEditing(bookId)
//     } else if (event.target.className == 'deleteBtn') {
//         const confirmed = confirm('Are you sure you want to delete this book?');
//         if (confirmed) {
//             const bookId = event.target.parentNode.parentNode.dataset.id;
//             deleteBook(bookId)
//         }
//     }
// }


// async function loadBookForEditing(id) {
//     const book = await request('http://localhost:3030/jsonstore/collections/books' + id);

//     document.querySelector('#add-book [name="id"]').value = id;
//     document.querySelector('#add-book [name="title"]').value = book.title;
//     document.querySelector('#add-book [name="author"]').value = book.author;
// }