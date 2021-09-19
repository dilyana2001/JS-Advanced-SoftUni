import { html } from '../../node_modules/lit-html/lit-html.js';

import * as movieService from '../services/movieService.js'


const isOwnerOfMovie = (onDelClickHandler, movie) => html `
    <a @click=${onDelClickHandler} class="btn btn-primary">Delete</a>
        <a href="/details/${movie._id}/edit" class="btn btn-primary">Edit</a>
`;


const detailsTemplate = (movie, userId, onDelClick, onLike, likeSpan) => html `
 <div class="card movie-details" style="width: 18rem;">
     <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
     <div class="card-body">
       <h5 class="card-title">${movie.title}</h5>
       <p className="card-text">${movie.description}</p>
       <section class="font-awsome">
       <a @click=${onLike} href=""><i class="fa${true ? 'r' : 's'} fa-heart"></i></a>
      <span></span>  ${likeSpan}</span>
       </section>
           ${movie._ownerId == userId ? isOwnerOfMovie(onDelClick, movie) : ''}
     </div>
   </div>
`;


export function detailsPage(context) {

    const onMovieLike = (movie) => movieService.addLike(movie).catch(err => alert(err.message));

    const deleteMovieEventHandler = () => context.page.redirect(`/delete-movie/${context.params.id}`);

    const likeSpan = (movie) => movieService.getMovieLikes(movie).then(res => html `${res}`).catch(err => alert(err.message))

    movieService.getMovieById(context.params.id)
        .then(movie => {
            context.render(detailsTemplate(movie, context.userId, deleteMovieEventHandler, onMovieLike(movie), likeSpan(movie)))
        })
        .catch(err => alert(err.message));


}