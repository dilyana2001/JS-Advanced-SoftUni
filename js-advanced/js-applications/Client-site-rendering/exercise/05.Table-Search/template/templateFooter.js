import { html } from '../node_modules/lit-html/lit-html.js'

export default () => html `
    <tfoot>
         <tr>
             <td colspan="3">
                 <input type="text" id="searchField" />
                 <button type="button" id="searchBtn">Search</button>
             </td>
         </tr>
    </tfoot>
`;