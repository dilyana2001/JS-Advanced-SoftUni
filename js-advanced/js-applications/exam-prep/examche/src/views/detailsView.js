import { html } from '../../node_modules/lit-html/lit-html.js';
import bookService from '../services/bookService.js';
import util from '../util.js';

const detailsView = (data, userData, isLogged) => html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${data.title}</h3>
            <p class="type">Type: ${data.type}</p>
            <p class="img"><img src="${data.imageUrl}"></p>
            <div class="actions">
                <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                ${data._ownerId == userData?.userId ? html`
                <a class="button" href="/edit/${data._id}">Edit</a>
                <a href="#" id="${data._id}" class="button" @click="${data.deleteBook}">Delete</a> ` : ''}
    
    
                <!-- Bonus -->
                <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                ${isLogged && data._ownerId != userData.userId ? html`
                <a class="button" href="#">Like</a>
                ` : ''}
    
    
                <!-- ( for Guests and Users )  -->
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes">Likes: 0</span>
                </div>
                <!-- Bonus -->
    
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${data.description}</p>
        </div>
    </section>
`;

export default function (ctx) {
    const userData = util.getUserData();
    const isLogged = util.isLogged();
    bookService.getBookById(ctx.params.bookId)
        .then(data => {
            data.deleteBook = onDeleteBookHandler;
            ctx.render(detailsView(data, userData, isLogged));
        })
        .catch((err) => console.log(err.message));

    function onDeleteBookHandler(e) {
        e.preventDefault();
        let bookId = e.target.id;
        bookService.deleteBookById(bookId)
            .then(() => {
                ctx.page.redirect('/');
            })
    }
}