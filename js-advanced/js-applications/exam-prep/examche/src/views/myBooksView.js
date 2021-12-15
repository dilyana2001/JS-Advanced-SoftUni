import { html } from '../../node_modules/lit-html/lit-html.js';
import bookService from '../services/bookService.js';
import util from '../util.js';
import bookTemplate from './bookTemplate.js';

const myBooksView = (data) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <ul class="my-books-list">
        ${data.length != 0 
        ? data.map(bookTemplate)
        : ''} 
    </ul>
    ${data.length == 0 ? html` <p class="no-books">No books in database!</p>` : ''}
</section>
`;

export default function (ctx) {
    const userData = util.getUserData();
    bookService.getMyBooks(userData.userId)
        .then(data => {
            console.log(data);
            ctx.render(myBooksView(data));
        })
}
