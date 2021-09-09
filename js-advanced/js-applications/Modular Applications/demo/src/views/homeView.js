import { html } from '../../node_modules/lit-html/lit-html.js';


let homeTemplate = () => html `
 <section style="height:100vh; display:flex; align-items: center;" class="home-page">
 <iframe width="1200" height="630"  src="https://www.youtube.com/embed/QIf2SbZqtTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </section>
`;


export function homePage(context) {
    context.render(homeTemplate());
}