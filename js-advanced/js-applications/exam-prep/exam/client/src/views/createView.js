import { html } from '../../node_modules/lit-html/lit-html.js';
import service from '../service/service.js';

const createView = () => html`
<section class="createPage">
    <form>
        <fieldset>
            <legend>Add Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" placeholder="Album name">

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" placeholder="Price">

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" placeholder="Description"></textarea>

                <button class="add-album" type="submit">Add New Album</button>
            </div>
        </fieldset>
    </form>
</section>
`;

export default function (ctx) {
    ctx.render(createView());

    const createForm = document.querySelector('.createPage form');
    createForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (!formData.get('name') || !formData.get('description') || !formData.get('imgUrl')
            || !formData.get('price') || !formData.get('releaseDate') || !formData.get('artist')
            || !formData.get('genre')) {
            return alert(`All fields are required!`);
        }

        const data = {
            name: formData.get('name'),
            imgUrl: formData.get('imgUrl'),
            price: formData.get('price'),
            releaseDate: formData.get('releaseDate'),
            artist: formData.get('artist'),
            genre: formData.get('genre'),
            description: formData.get('description'),
        }
        service.createAlbum(data)
            .then((album) => {
                console.log(album);
                ctx.page.redirect(`/catalog`);
            })
    })
}