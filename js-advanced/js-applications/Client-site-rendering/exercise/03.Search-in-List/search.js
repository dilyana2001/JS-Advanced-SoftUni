import { render } from './node_modules/lit-html/lit-html.js';
import template from './template.js';
import towns from './towns.js';

let rootElement = document.querySelector('#towns');
let searchBtn = document.querySelector('#searchBtn');
let searchText = document.querySelector('#searchText');
let resultElement = document.querySelector('#result');

let townResult = template(towns);
render(townResult, rootElement);

searchBtn.addEventListener('click', () => {

    let townList = Array.from(rootElement.querySelectorAll('ul li'));

    townList.forEach(town => {
        town.style.fontWeight = 'normal';
        town.style.textDecoration = 'none';
    })

    let filtered = townList.filter(el => el.textContent.includes(searchText.value));

    filtered.forEach(town => {
        town.style.fontWeight = 'bold';
        town.style.textDecoration = 'underline';
    });

    resultElement.textContent = `${filtered.length} matches found`;
    searchText.value = '';
})