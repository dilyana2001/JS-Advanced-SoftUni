let moviesSection = document.querySelector('.movies');

function showPage() {
    moviesSection.classList.remove('hidden');
    fetchMovies();
}

function hidePage() {
    moviesSection.classList.add('hidden');
}

function fetchMovies() {
    fetch(`http://localhost:3030/data/movies`)
        .then(res => res.json())
        .then(renderMovies)
        .catch(err => console.log(err.mesage));
}

function renderMovies(movies) {
    let movieTemplate = moviesSection.querySelector('#movie-cars-template');
    let movieListElement = document.querySelector('.movie-list');
    movieListElement.innerHTML = '';

    for (const movie of movies) {
        let currentMovieElement = movieTemplate.cloneNode(true);
        currentMovieElement.classList.remove('hidden');
        currentMovieElement.removeAttribute('id')
        currentMovieElement.querySelector('.card-title').textContent = movie.title;
        movieListElement.appendChild(currentMovieElement)
    }
    moviesSection.appendChild(movieListElement)
}

export default {
    showPage,
    hidePage
}