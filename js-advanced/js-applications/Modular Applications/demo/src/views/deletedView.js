import { html } from '../../node_modules/lit-html/lit-html.js';

const deletePageTemplate = () => html `
        <div class="delete-view-page">
             <img src="./src/images/deletedView.jpg" alt="Deleted!">
        </div>
       
`;

export function deletedView(context) {
    context.render(deletePageTemplate())
}