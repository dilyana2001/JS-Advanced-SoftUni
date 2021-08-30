import { html } from './node_modules/lit-html/lit-html.js';

let listElement = (town) => html `
<li>${town}</li>
`;

export default (towns) => html `
<ul>
    ${towns.map(town=> html `${listElement(town)}`)}
</ul>
`;