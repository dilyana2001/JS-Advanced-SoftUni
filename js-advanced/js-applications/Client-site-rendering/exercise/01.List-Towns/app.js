import { html, render } from "./node_modules/lit-html/lit-html.js";

let btnLoadTowns = document.querySelector('#btnLoadTowns');
let inputContent = document.querySelector('#towns');
let rootElement = document.querySelector('#root');

// template
let townTemplate = (town) => html `<li>${town}</li>`;

btnLoadTowns.addEventListener('click', (e) => {
            e.preventDefault();
            let contentArray = inputContent.value.split(', ');
            let ulElement = html `<ul>${contentArray.map(town=> html`${townTemplate(town)}`)}</ul>`; // template
    render(ulElement, rootElement);
})