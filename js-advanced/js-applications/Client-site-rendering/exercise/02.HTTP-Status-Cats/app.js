import { html, render } from "./node_modules/lit-html/lit-html.js";
import manyCotsTemplate from "./templates/manyCotsTemplate.js";
import cats from './catSeeder.js';

let rootElement = document.querySelector('#allCats');

function showStatusCodeHandler(e) {
    let currentLink = e.currentTarget.parentNode;
    let detailsCatElement = currentLink.querySelector('.status');
    detailsCatElement.style.display == 'none' ?
        detailsCatElement.style.display = 'block' :
        detailsCatElement.style.display = 'none';
    console.log(detailsCatElement);
}
const catsArray = cats.cats;
catsArray.map(cot => cot.showStatusCodeBtn = showStatusCodeHandler);
let catResult = manyCotsTemplate(catsArray);
render(catResult, rootElement);