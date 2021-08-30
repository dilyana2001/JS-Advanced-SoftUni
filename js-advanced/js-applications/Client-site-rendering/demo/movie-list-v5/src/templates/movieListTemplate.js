import { html } from '../../node_modules/lit-html/lit-html.js' // with lit-html we can use javascript in template engine
import movieTemplate from './movieTemplate.js';
export default (movies) => html `
<h1>Movie List</h1>
<ul class="movie-list">
    ${movies.map(x=> html`${movieTemplate(x)}`)} 
</ul>
`;