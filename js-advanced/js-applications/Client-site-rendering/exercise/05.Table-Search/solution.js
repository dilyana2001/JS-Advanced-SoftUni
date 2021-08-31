import { render } from './node_modules/lit-html/lit-html.js';
import bodyTemplate from './template/bodyTemplate.js';
import services from './services.js';

let containerElement = document.querySelector('.container');

services.getAll()
    .then(result => {
        let contactTemplateResult = bodyTemplate(Object.values(result));
        render(contactTemplateResult, containerElement);
        let serachBtn = document.querySelector('#searchBtn');
        let searchField = document.querySelector('#searchField');
        let contactsElements = Array.from(document.querySelectorAll('tbody tr'));
        console.log(contactsElements);

        serachBtn.addEventListener('click', () => {
            contactsElements.forEach(el => el.className = '');

            let filtered = contactsElements.filter(el => el.textContent.includes(searchField.value))
            console.log(filtered);
            filtered.forEach(el => el.className = 'select');
            searchField.value = '';
        })
    });