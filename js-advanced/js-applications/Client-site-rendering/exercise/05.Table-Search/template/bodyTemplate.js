import { html } from '../node_modules/lit-html/lit-html.js';
import templateContact from './templateContact.js';


export default (contactList) => html `
    <thead>
         <tr>
             <th>Student name</th>
             <th>Student email</th>
             <th>Student course</th>
         </tr>
    </thead> 
<tbody>
    ${contactList.map(x=> html`${templateContact(x)}`)} 
</tbody>
<tfoot>
         <tr>
             <td colspan="3">
                 <input type="text" id="searchField" />
                 <button type="button" id="searchBtn">Search</button>
             </td>
         </tr>
    </tfoot>
`;