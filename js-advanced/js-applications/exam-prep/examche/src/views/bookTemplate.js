import { html } from '../../node_modules/lit-html/lit-html.js';

const bookTemplate = (data) => html`
    <li class="otherBooks">
        <h3>${data.title}</h3>
        <p>Type: ${data.type}</p>
        <p class="img"><img src="${data.imageUrl}"></p>
        <a class="button" href="/details/${data._id}">Details</a>
    </li>
`;

export default bookTemplate;


