import { html } from '../node_modules/lit-html/lit-html.js';
import service from '../services/service.js';

const searchTemplate = (data) => html`
     <div class="listing">
                    <div class="preview">
                        <img src="${data.imageUrl}">
                    </div>
                    <h2>${data.brand} ${data.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${data.year}</h3>
                            <h3>Price: ${data.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/details/${data._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
`;


const search = (data) => html`
       <section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button class="button-list">Search</button>
            </div>

            <h2>Results:</h2>
            <div class="listings">
             ${data?.length > 0  ? 
             data.map(searchTemplate) :
             html `<p class="no-cars"> No results.</p>`}
            </div>
        </section>
`;

export default function (ctx) {
    ctx.render(search());
    let form = document.querySelector('#search-cars');
    const query = form.querySelector('#search-input');
    const searchButton = form.querySelector('.button-list');

    searchButton.addEventListener('click', (e) => {
        console.log(query.value)
        service.searchByYear(query.value)
            .then((data) => {
                console.log(data);
                ctx.render(search(data));
            })
    })

}