import { html } from '../node_modules/lit-html/lit-html.js'

export default (contact) => html `
<tr>
    <td>${contact.firstName} ${contact.lastName}</td>
    <td>${contact.email}</td>
    <td>${contact.course}</td>
</tr>
`;