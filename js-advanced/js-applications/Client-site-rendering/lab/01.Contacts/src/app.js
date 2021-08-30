import { html, render } from "../node_modules/lit-html/lit-html.js";
import contacts from './contacts.js';
import contactListTemplate from './template/contactListTemplate.js';


let rootElement = document.querySelector('.root');

function onClickDetailsHandler(e) {
    let currentContact = e.currentTarget;
    let detailsContactElement = currentContact.parentNode.querySelector('.details');
    detailsContactElement.style.display == 'none' ?
        detailsContactElement.style.display = 'block' :
        detailsContactElement.style.display = 'none';

}

contacts.map(contact => contact.onClickDetails = onClickDetailsHandler)
let contactResult = contactListTemplate(contacts)
render(contactResult, rootElement)