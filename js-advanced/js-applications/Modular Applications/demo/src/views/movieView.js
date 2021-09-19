import { html } from "../../node_modules/lit-html/lit-html.js"

import * as movieService from '../services/movieService.js';

const movieCardTemplate = (movie) => html `
   <div class="card" style="width: 18rem;">
     <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
     <div class="card-body">
       <h5 class="card-title">${movie.title}</h5>
       <a href="/details/${movie._id}" class="btn btn-primary">Details</a>
     </div>
   </div>`;

const moviesTemplate = (movies) => html `
    <h3>Movies List</h3>

    <ul class="movie-list">
        ${movies.map(x=> html`<li>${movieCardTemplate(x)}</li>`)}
    </ul>`;

export function moviePage(context) {
   movieService.getAll()
         .then(movies=>{
         context.render(moviesTemplate(movies))
      })
      .catch(err=> alert(err.message));
}

export function myMoviePage(context) {
  movieService.getMyMovies(context.userId)
         .then(movies => {
         context.render(moviesTemplate(movies));
      })
     .catch(err=> alert(err.message));
}