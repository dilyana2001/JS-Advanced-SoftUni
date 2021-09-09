import * as request from './requester.js';
import * as api from './api.js'

export function getAll() {
    return request.get(api.movies);
}

export function getMovieById(id) {
    return request.get(`${api.movies}/${id}`);
}

export function createMovie(title, imageUrl, description) {
    return request.post(api.movies, { title, img: imageUrl, description })
}

export function deleteMovie(id) {
    return request.del(`${api.movies}/${id}`)
}

export function editMovie(id, title, imageUrl, description) {
    return request.put(`${api.movies}/${id}`, { title, img: imageUrl, description })
}

export function getMyMovies(id) {
    return request.get(`${api.movies}?where=_ownerId%3D%22${id}%22`)
}



// get likes on ONE movie
export function getMovieLikes(movie) {
    return request.get(`${api.movieLikes}?where=movieId%3D%22${movie._id}%22&distinct=_ownerId&count`)
}


//get onwerID like on movie
export function getMyMovieLikes(movie, userId) {
    return request.get(`${api.movieLikes}?where=movieId%3D%22${movie._id}%22%20and%20_ownerId%3D%22${userId}%22`)

}


//post like on movie
export function addLike(movie) {
    return request.post(api.movieLikes, { movieId: movie._id })
}