import { html } from '../node_modules/lit-html/lit-html.js';
import service from '../src/service/service.js';
import gameTemplateCatalogView from './gameTemplateCatalogView.js';

const catalogView = (data) => html`
    <section id="catalog-page">
        <h1>All Games</h1>
        <!-- Display div: with information about every game (if any) -->
        ${data.length > 0  ? data.map(x=> html `${gameTemplateCatalogView(x)}`) : ''}
        ${data.length == 0 ? html `<h3 class="no-articles">No articles yet</h3>` : ''}
    
    </section>`;

export default function (ctx) {
    service.getAll()
        .then(data => {
            console.log(data)
            ctx.render(catalogView(data))
        })
        .catch((err) => console.log(err.message))
}