import { render, html } from "../../node_modules/lit-html/lit-html.js"; // lit-html syntax 
import movieListTemplate from './src/templates/movieListTemplate.js';
import movieService from "./src/services/movieService.js";

let rootElement = document.querySelector('#root');

function onDetailsClickHandler(e) {
    console.log(e);
}

movieService.getAll()
    .then(movies => {
        movies[0].onDetailsClick = onDetailsClickHandler;
        let movieListTemplateResult = movieListTemplate(movies);
        render(movieListTemplateResult, rootElement);
    })