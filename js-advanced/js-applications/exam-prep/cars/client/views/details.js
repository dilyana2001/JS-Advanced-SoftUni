import { html } from '../node_modules/lit-html/lit-html.js';

import service from '../services/service.js';
import utils from '../utils.js';

const details = (data, userData, isLogged) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${data.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${data.brand}</li>
            <li><span>Model:</span>${data.model}</li>
            <li><span>Year:</span>${data.year}</li>
            <li><span>Price:</span>${data.price}$</li>
        </ul>

        <p class="description-para">${data.description}
        </p>
        
        ${isLogged && userData.id == data._ownerId ? 
        html `
            <div class="listings-buttons">
                    <a href="/edit/${data._id}" class="button-list">Edit</a>
                    <a href="#" id="${data._id}" class="button-list" @click="${data.deleteCar}">Delete</a>
            </div>  ` : html `` }
  
    </div>
</section>
`;

export default function (ctx) {
    const userData = utils.getUserData();
    const isLogged = utils.isLogged();
    service.getCarById(ctx.params.carId)
        .then(data => {
            console.log(data);
            if(isLogged){
                data.deleteCar = onDeleteCarHandler;
            }
            ctx.render(details(data, userData, isLogged));
        })
        .catch((err) => console.log(err.message));


    function onDeleteCarHandler(e) {
        e.preventDefault();
        let carId = e.target.id;
        service.deleteCarById(carId)
            .then(() => {
                ctx.page.redirect('/catalog');
            })
    }
}