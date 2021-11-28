import { html } from '../../node_modules/lit-html/lit-html.js';
import bookService from '../services/bookService.js';


const detailsView = (data) => html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${data.title}</h3>
            <p class="type">Type: ${data.type}</p>
            <p class="img"><img src=${data.imageUrl}></p>
            <div class="actions">
                <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                <a class="button" href="">Edit</a>
                <a class="button" href="#">Delete</a>
    
                <!-- Bonus -->
                <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                <a class="button" href="#">Like</a>
    
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
    bookService.getBookById(ctx.params.bookId)
        .then(data => {
            console.log(data)
            ctx.render(detailsView(data));
        })
        .catch((err) => console.log(err.message));
}