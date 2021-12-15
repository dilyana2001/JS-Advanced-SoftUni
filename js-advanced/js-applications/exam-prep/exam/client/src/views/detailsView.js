import { html } from '../../node_modules/lit-html/lit-html.js';
 
import service from '../service/service.js';
import utils from '../../utils.js';
 
 
const detailsView = (data, userData) => html`
    <section id="detailsPage">
        <div class="wrapper">
            <div class="albumCover">
                <img src="${data.imgUrl}">
            </div>
            <div class="albumInfo">
                <div class="albumText">
                    <h1>Name: ${data.name}</h1>
                    <h3>Artist: ${data.artist}</h3>
                    <h4>Genre: ${data.genre}</h4>
                    <h4>Price: $${data.price}</h4>
                    <h4>Date: ${data.releaseDate}</h4>
                    <p>Description: ${data.description}</p>
                </div>
    
                ${data._ownerId == userData.id ? html`
                <div class="actionBtn">
                    <a href="/edit/${data._id}" class="edit">Edit</a>
                    <a href="javascript:void(0)" class="remove">Delete</a>
                </div>` : html`
                <div></div>
                `}
    
            </div>
        </div>
    </section>
`;
 
export default function (ctx) {
    const userData = utils.getUserData();
    service.getAlbumById(ctx.params.albumId)
        .then(data => {
            console.log(data)
            ctx.render(detailsView(data, userData));
 
            if (document.querySelector('.remove')) {
                document.querySelector('.remove').addEventListener('click', (e) => {
                    e.preventDefault();
                    let ifDelete = confirm("Are u sure?");
                    if(ifDelete) {
                    service.deleteAlbumById(ctx.params.albumId)
                        .then(() => {
                            ctx.page.redirect('/');
                        })
                    }
                })
            }
 
        })
}