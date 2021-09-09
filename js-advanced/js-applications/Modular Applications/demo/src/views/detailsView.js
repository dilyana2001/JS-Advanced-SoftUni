import { html } from '../../node_modules/lit-html/lit-html.js';

import * as movieService from '../services/movieService.js'


const isOwnerOfMovie = (onDelClickHandler, movie) => html `
    <a @click=${onDelClickHandler} class="btn btn-primary">Delete</a>
        <a href="/details/${movie._id}/edit" class="btn btn-primary">Edit</a>
`;


const detailsTemplate = (movie, userId, onDelClick, likeNumb, onLike) => html `
 <div class="card movie-details" style="width: 18rem;">
     <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
     <div class="card-body">
       <h5 class="card-title">${movie.title}</h5>
       <p className="card-text">${movie.description}</p>
       <section class="font-awsome">
       <a @click=${onLike} href=""><i class="fa${true ? 'r' : 's'} fa-heart"></i></a>
       <p>${likeNumb}</p>
       </section>
           ${movie._ownerId == userId ? isOwnerOfMovie(onDelClick, movie) : ''}
     </div>
   </div>
`;


export function detailsPage(context) {
    movieService.getMovieById(context.params.id)
        .then(movie => {
            // let likes = myLikeOnMovie(movie, context.userId)
            context.render(detailsTemplate(movie, context.userId, deleteMovieEventHandler, movieLikes(movie), onMovieLike(movie)))
        })
        .catch(err => alert(err.message));

    let likesSpan = html ``;

    function movieLikes(movie) {
        movieService.getMovieLikes(movie)
            .then(likes => {

            })
            .catch(err => alert(err.message));
    }

    // function myLikeOnMovie(movie, userId) {
    //     movieService.getMyMovieLikes(movie, userId)
    //         .then(result => {
    //             currentLikes += result;
    //         })
    //     return currentLikes;
    // }

    function onMovieLike(movie) {
        movieService.addLike(movie)
            .then()
            .catch(err => alert(err.message));
    }

    function deleteMovieEventHandler() {
        context.page.redirect('/delete-movie');
        // let confirmed = confirm(`Are you sure?`)
        // if (confirmed) {
        movieService.deleteMovie(context.params.id)
            .then(() => {

            })
            .catch(err => alert(err.message));
        //     }
    }
}