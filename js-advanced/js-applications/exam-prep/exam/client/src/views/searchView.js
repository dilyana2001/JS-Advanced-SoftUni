import { html } from '../../node_modules/lit-html/lit-html.js';
import service from '../service/service.js';

const searchTemplate = (data) => html`
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
        ${isLogged() ? html` <div class="btn-group">
            <a href="/details/${data._id}" id="details">Details</a>
        </div>` : ''}

    </div>
</div>
`;


const searchView = (data) => html`
    <section id="searchPage">
        <h1>Search by Name</h1>
    
        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button class="button-list">Search</button>
        </div>
    
        <h2>Results:</h2>
        <div class="search-result">
            ${data?.length > 0 ? data.map(x => html`${searchTemplate(x)}`) : html`<p class="no-result">No result.</p>`}
    
        </div>
    </section>
`;

export default function (ctx) {
    ctx.render(searchView());
    let form = document.querySelector('.search');



    const query = form.querySelector('#search-input');
    const searchButton = form.querySelector('button');

    searchButton.addEventListener('click', (e) => {
        console.log(query.value)
        service.searchByName(query.value)
            .then((data) => {
                console.log(data);
                ctx.render(searchView(data));
            })
    })

}

function isLogged() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        return true;
    }
    return false;
}