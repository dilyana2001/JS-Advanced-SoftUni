import { html } from '../../node_modules/lit-html/lit-html.js';

const yourCreateisReadyTemplate = () => html `
        <div class="create-view-page">
             <img src="./src/images/readyView.jpg" alt="Created!">
        </div>
       
`;

export function yourCreateisReadyView(context) {
    context.render(yourCreateisReadyTemplate())
}