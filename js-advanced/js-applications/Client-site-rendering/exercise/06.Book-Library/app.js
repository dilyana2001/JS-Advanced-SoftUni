import { render } from './node_modules/lit-html/lit-html.js';
import bookService from './services/bookService.js';
import bodyTemplate from './templates/bodyTemplate.js';

//adding DOM
let rootElement = document.querySelector('#root');
render(bodyTemplate([]), rootElement);
let loadBooksBtn = document.querySelector('#loadBooks');

//loading books from server
function loadingBooks() {
    loadBooksBtn.addEventListener('click', () => {
        bookService.getAllBooksService()
            .then(books => {
                let bookTemplateResult = bodyTemplate(books);
                render(bookTemplateResult, rootElement);
            })
    })
}
loadingBooks();

// adding
let addingFormElement = document.querySelector('#add-form');
addingFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.currentTarget.type = 'SUBMIT') {
        let titleInputElement = e.currentTarget.querySelector('input[name=title]');
        let authorInputElement = e.currentTarget.querySelector('input[name=author]');
        let data = { title: titleInputElement.value, author: authorInputElement.value };
        bookService.addBookService(data)
        titleInputElement.value = '';
        authorInputElement.value = '';
    }
})

// actions delete/edit
document.querySelector('tbody').addEventListener('click', (e) => {
    e.preventDefault();
    let currentBook = e.target.parentNode.parentNode.querySelector('td[type=hidden]');
    if (e.target.tagName == 'BUTTON') {
        if (e.target.textContent == 'Delete') {
            bookService.deleteBookService(currentBook.id);
        } else if (e.target.textContent == 'Edit') {
            let editFormElement = document.querySelector('#edit-form');
            addingFormElement.className = 'hidden';
            editFormElement.className = '';

            let editFormTitlePlaceholder = editFormElement.querySelector('input[name=title]');
            let editFormAuthorPlaceholder = editFormElement.querySelector('input[name=author]');
            editFormTitlePlaceholder.value = currentBook.parentNode.querySelectorAll('td')[0].textContent;
            editFormAuthorPlaceholder.value = currentBook.parentNode.querySelectorAll('td')[1].textContent;

            editFormElement.addEventListener('submit', (e) => {
                e.preventDefault;
                let editFormTitleInputElement = e.currentTarget.querySelector('input[name=title]');
                let editFormAuthorInputElement = e.currentTarget.querySelector('input[name=author]');
                let data = { title: editFormTitleInputElement.value, author: editFormAuthorInputElement.value }
                bookService.editBookService(currentBook.id, data);
            })
        }
    }
})