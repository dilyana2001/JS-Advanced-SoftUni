import { html } from '../node_modules/lit-html/lit-html.js';

const gameTemplateHomeView = (data) => html`
    <div class="game">
        <div class="image-wrap">
            <img src="${data.image}">
        </div>
        <h3>${data.title}</h3>
        <div class="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div class="data-buttons">
            <a href="/details/${data._id}" class="btn details-btn">Details</a>
        </div>
    </div>
`;

export default gameTemplateHomeView;
