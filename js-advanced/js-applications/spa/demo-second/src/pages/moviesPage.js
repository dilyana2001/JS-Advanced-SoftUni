import moviesService from '../services/moviesServce.js'
import movieTemplate from '../templates/movieTemplate.js'
import render from '../render.js'
import movieView from '../views/movieView.js'

let moviesSection = document.querySelector('.movies');

function showPage() {
    moviesSection.classList.remove('hidden');
    moviesService.getAllMovies()
        .then(renderMovies)
}

function hidePage() {
    moviesSection.classList.add('hidden');
}


function renderMovies(movies) {
    let movieListElement = document.querySelector('.movie-list');
    // let movieTemplate = moviesSection.querySelector('#movie-cars-template');
    movieListElement.innerHTML = '';

    for (const movie of movies) {
        movie.isDisabled = Math.random() < 0.5;
        // movieListElement.appendChild(renderMovie(movieTemplate, movie));
        // movieListElement.appendChild(currentElement)

        // movieListElement.innerHTML += movieTemplate(movie) //used by movieTemplate

        movieListElement.innerHTML += render(movieView, movie)


    }
    moviesSection.appendChild(movieListElement);
}

// DOM manipulation template style
// function renderMovie(movieTemplate, movie) {
//     let currentMovieElement = movieTemplate.cloneNode(true);
//     currentMovieElement.classList.remove('hidden');
//     currentMovieElement.removeAttribute('id');

//     let titleElement = currentMovieElement.querySelector('.card-title')
//     titleElement.textContent = movie.title;

//     let descriptionElement = currentMovieElement.querySelector('.card-text')
//     descriptionElement.textContent = movie.description;

//     return currentMovieElement;
// }

export default {
    showPage,
    hidePage
}