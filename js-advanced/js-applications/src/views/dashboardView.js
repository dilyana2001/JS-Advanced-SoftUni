import { html } from '../../node_modules/lit-html/lit-html.js';
import bookService from '../services/bookService.js';
import bookTemplate from './bookTemplate.js';

const dashboardView = (data) => html`
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <ul class="other-books-list">
            ${data.length != 0 
                ? data?.map(x=> html`${bookTemplate(x)}`) 
                : ''}
            </ul>
            ${data.length == 0 ? html `<p class="no-books">No books in database!</p>` : ''}
        </section>
`;

export default function (ctx) {
    bookService.getAll()
        .then(data => {
            console.log(data);
            ctx.render(dashboardView(data));
        })
}
