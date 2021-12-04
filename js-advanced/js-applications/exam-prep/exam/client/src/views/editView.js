import { html } from '../../node_modules/lit-html/lit-html.js';
import service from '../service/service.js';

const editView = (data) => html`
    <section class="editPage">
        <form>
            <fieldset>
                <legend>Edit Album</legend>
    
                <div class="container">
                    <label for="name" class="vhide">Album name</label>
                    <input id="name" name="name" class="name" type="text" value="${data.name}">
    
                    <label for="imgUrl" class="vhide">Image Url</label>
                    <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value="${data.imgUrl}">
    
                    <label for="price" class="vhide">Price</label>
                    <input id="price" name="price" class="price" type="text" value="${data.price}">
    
                    <label for="releaseDate" class="vhide">Release date</label>
                    <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value="${data.releaseDate}">
    
                    <label for="artist" class="vhide">Artist</label>
                    <input id="artist" name="artist" class="artist" type="text" value="${data.artist}">
    
                    <label for="genre" class="vhide">Genre</label>
                    <input id="genre" name="genre" class="genre" type="text" value="${data.genre}">
    
                    <label for="description" class="vhide">Description</label>
                    <textarea name="description" class="description" rows="10" cols="10">${data.description}</textarea>
    
                    <button class="edit-album" type="submit">Edit Album</button>
                </div>
            </fieldset>
        </form>
    </section>
`;

export default function (ctx) {
    service.getAlbumById(ctx.params.albumId)
        .then(data => {
            console.log(data)
            ctx.render(editView(data));
            document.querySelector('.editPage form').addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);

                if (!formData.get('name') || !formData.get('description') || !formData.get('imgUrl')
                    || !formData.get('price') || !formData.get('releaseDate') || !formData.get('artist')
                    || !formData.get('genre')) {
                    return alert(`All fields are required!`);
                }

                const fetchData = {
                    name: formData.get('name'),
                    imgUrl: formData.get('imgUrl'),
                    price: formData.get('price'),
                    releaseDate: formData.get('releaseDate'),
                    artist: formData.get('artist'),
                    genre: formData.get('genre'),
                    description: formData.get('description'),
                }
                service.editAlbumById(ctx.params.albumId, fetchData)
                    .then((newData) => {
                        console.log(newData);
                        ctx.page.redirect(`/details/${newData._id}`);
                    })
            });
        })
}
