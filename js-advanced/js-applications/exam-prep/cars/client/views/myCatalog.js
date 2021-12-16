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

const myCatalog = (data) => html`
  <section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">
                    ${data.length != 0 ?
                    data.map(carTemplate) :
                    html `<p class="no-cars"> You haven't listed any cars yet.</p>`}
            </div>
        </section>
`;

export default function (ctx) {
    const userData = utils.getUserData();
    service.getMyCars(userData.id)
        .then(data => {
            console.log(data);
            ctx.render(myCatalog(data));
        })
}