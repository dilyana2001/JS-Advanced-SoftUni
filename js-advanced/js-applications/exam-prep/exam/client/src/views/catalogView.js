import { html } from '../../node_modules/lit-html/lit-html.js';
import service from '../service/service.js';

const albumTemplate = (data) => html`
   <div class="card-box">
                <img src="${data.imgUrl}">
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${data.name}</p>
                        <p class="artist">Artist: ${data.artist}</p>
                        <p class="genre">Genre: ${data.genre}</p>
                        <p class="price">Price: $${data.price}</p>
                        <p class="date">Release Date: ${data.releaseDate}</p>
                    </div>
                 ${isLogged() ? html `
                    <div class="btn-group">
                        <a href="/details/${data._id}" id="details">Details</a>
                    </div>` : ''
                }    
                </div>
            </div>
`;

const catalogView = (data) => html`
        <section id="catalogPage">
            <h1>All Albums</h1>
            ${data.length > 0 
                ? data.map(x=> html `${albumTemplate(x)}`) 
                : html `<p>No Albums in Catalog!</p>`}
        </section>
`;

export default function (ctx) {
    service.getAll()
        .then(data => {
            console.log(data)
            ctx.render(catalogView(data));
        })
}     

function isLogged() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        return true;
    }
    return false;
}