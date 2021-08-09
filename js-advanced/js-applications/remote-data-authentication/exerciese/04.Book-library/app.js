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