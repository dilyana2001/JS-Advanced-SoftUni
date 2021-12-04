import { html } from '../node_modules/lit-html/lit-html.js';
import service from '../src/service/service.js';
import  gameTemplateHomeView  from './gameTemplateHomeView.js';

const homeView = (data) => html`
     <section id="welcome-world">

<div class="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
</div>
<img src="./images/four_slider_img01.png" alt="hero">

<div id="home-page">
    <h1>Latest Games</h1>

    <!-- Display div: with information about every game (if any) -->
        ${data.length > 0  ? data?.map(x=> html `${gameTemplateHomeView(x)}`): ''}
        ${data.length == 0 ? html `<p class="no-articles">No games yet</p>` : ''}

</div>
</section>`;

export default function (ctx) {
    service.currentGames()
        .then(data => {
            console.log(data)
            ctx.render(homeView(data))
        })
        .catch((err) => console.log(err.message))
}