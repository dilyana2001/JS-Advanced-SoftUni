import { html } from '../node_modules/lit-html/lit-html.js';

const gameTemplateCatalogView = (data) => html`
   <div class="allGames">
            <div class="allGames-info">
                <img src="${data.imageUrl}">
                <h6>${data.category}</h6>
                <h2>${data.title}</h2>
                <a href="/details/${data._id}" class="details-button">Details</a>
            </div>
    
        </div>
`;

export default gameTemplateCatalogView;


