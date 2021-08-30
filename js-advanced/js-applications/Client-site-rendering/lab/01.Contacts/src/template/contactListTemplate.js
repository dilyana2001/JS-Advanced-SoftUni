import { html, render } from '../../node_modules/lit-html/lit-html.js'
import contactTemplate from './contactTemplate.js';

export default (contacts) => html `
<h1>My contacts</h1>
<div id="contacts">
     ${contacts.map(x=> html`${contactTemplate(x)}`)}
</div>
`;