import { html } from '../node_modules/lit-html/lit-html.js';
import service from '../services/service.js';
import utils from '../utils.js';

const carTemplate = (data) => html`
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

const catalog = (data) => html`
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">
                    <!-- Display all records -->
            ${data.length != 0 ? 
            data.map(carTemplate) :
            html `   <!-- Display if there are no records --> 
            <p class="no-cars">No cars in database.</p>
           `}
        </div>
    </section>
`;

export default function (ctx) {
    service.getAll()
        .then(data => {
            console.log(data)
            ctx.render(catalog(data));
        })
}     
