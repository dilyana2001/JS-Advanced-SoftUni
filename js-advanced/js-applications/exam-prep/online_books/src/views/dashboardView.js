import { html } from '../../node_modules/lit-html/lit-html.js';
import bookService from '../services/bookService.js';


const bookTemplate = (data) => html`
        <li class="otherBooks">
            <h3>${data.title}</h3>
            <p>Type: ${data.type}</p>
            <p class="img"><img src="../static${data.imageUrl}"></p>
            <a class="button" href="/details/${data._id}">Details</a>
        </li>
`;

const dashboardView = (data) => html`
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <ul class="other-books-list">
            ${data.length != 0 ? data?.map(x=> html`${bookTemplate(x)}`) :  html `<p class="no-books">No books in database!</p>`}
            </ul>
        </section>
`;

export default function (ctx) {
    bookService.getAll()
        .then(data => {
            console.log(data)
            ctx.render(dashboardView(data))
        })
}
