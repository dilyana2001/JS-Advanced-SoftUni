import { html } from "../../node_modules/lit-html/lit-html.js"

import * as movieService from '../services/movieService.js';

const addMovieTemplate = (onSubmit) => html `
<div class="add-movie-container">
  <form @submit=${onSubmit}>
              <div class="mb-3 row">
                  <label for="movie-title" class="form-label">Title</label>
                  <input type="text" class="form-control" id="movie-title"  name="title">
            
              </div>
              <div class="mb-3 row">
                <label for="movie-image-ulr" class="form-label">Image Url</label>
                  <input type="text" class="form-control" id="movie-image-ulr" name="imageUrl">
              </div>
              <div class="mb-3 row">
                <label for="movie-description" class="form-label">Description</label>
                  <textarea  class="form-control" id="movie-description" name="description" rows="3"></textarea>
              </div>
              <div class="mb-3 row" style="width: 200px";>
                      <input type="submit" value="Add Movie" class="form-control" />
              </div>
   </form>
</div>`;


export function addMoviePage(context) {
    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let imageUrl = formData.get('imageUrl');
        let description = formData.get('description');

        movieService.createMovie(title, imageUrl, description)
            .then(() => {
                context.page.redirect('/movie-created');
            })
            .catch(err => alert(err.message));
    }
    context.render(addMovieTemplate(onSubmit));
}