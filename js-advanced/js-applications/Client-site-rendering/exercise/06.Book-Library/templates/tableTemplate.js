import { html } from '../node_modules/lit-html/lit-html.js';
import bookTemplate from './bookTemplate.js';

export default (books) => html `
<table>
          <thead>
             <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
             </tr>
         </thead>
          <tbody>
             ${Object.entries(books).map(book => html `${bookTemplate(book)}`)}  
         </tbody>
         </table>
`;