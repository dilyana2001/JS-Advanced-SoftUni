import { html } from '../node_modules/lit-html/lit-html.js';

export default () => html `
      <form id="edit-form" class="hidden">
           <input type="hidden" name="id">
           <h3>Edit book</h3>
           <label>TITLE</label>
           <input type="text" name="title" placeholder="title...">
           <label>AUTHOR</label>
           <input type="text" name="author" placeholder="author...">
           <input type="submit" value="Save">
       </form>
`;