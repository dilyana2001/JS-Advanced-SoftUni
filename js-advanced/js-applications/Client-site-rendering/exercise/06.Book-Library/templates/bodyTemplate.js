import { html } from '../node_modules/lit-html/lit-html.js';
import addFormTemplate from './addFormTemplate.js';
import editFormTemplate from './editFormTemplate.js';
import tableTemplate from './tableTemplate.js';


export default (books) => html `
<button id="loadBooks">LOAD ALL BOOKS</button>
${tableTemplate(books)} 
${addFormTemplate()}
${editFormTemplate()}
`;