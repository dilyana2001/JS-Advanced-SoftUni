import { html } from "../node_modules/lit-html/lit-html.js";

export default (book) => html `
<tr>
     <td>${book[1].title}</td>
     <td>${book[1].author}</td> 
     <td>
         <button>Edit</button>
         <button>Delete</button>
     </td>
      <td type="hidden" id="${book[0]}"></td>
</tr>
`;