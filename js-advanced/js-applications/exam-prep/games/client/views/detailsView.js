import { html } from '../node_modules/lit-html/lit-html.js';
import service from '../src/service/service.js';


const commentTemplate = (data) => html`
                        <li class="comment">
                            <p>Content: ${data.comment}</p>
                        </li>
`;

const detailsView = (data, comments) => html`
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">
        
                <div class="game-header">
                    <img class="game-img" src="${data.imageUrl}" />
                    <h1>${data.title}</h1>
                    <span class="levels">MaxLevel: ${data.maxLevel}</span>
                    <p class="type">${data.category}</p>
                </div>
        
                <p class="text">
                    ${data.summary}
                </p>
        
                <!-- Bonus ( for Guests and Users ) -->
                <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <!-- list all comments for current game (If any) -->
                        ${comments.length > 0 ? comments.map(x => html`${commentTemplate(x)}`) : html` <p class="no-comment">No
                            comments.</p>`}
                    </ul>
                    <!-- Display paragraph: If there are no games in the database -->
                    <!-- <p class="no-comment">No comments.</p> -->
                </div>
        
                <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                <div class="buttons">
                    <a href="javascript:void(0)" class="button">Edit</a>
                    <a href="javascript:void(0)" class="button">Delete</a>
                </div>
            </div>
        
            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            <article class="create-comment">
                <label>Add new comment:</label>
                <form class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>
        
        </section>
`;

export default function (ctx) {
    service.getGameById(ctx.params.gameId)
        .then(data => {
            // data.deleteBook = onDeleteBookHandler;
            service.getComments(data._id)
                .then(comments => {
                    console.log(comments)
                    console.log(data)
                    ctx.render(detailsView(data, comments));
                })
                .catch((err) => console.log(err.message));

        })
        .catch((err) => console.log(err.message));

    // function onDeleteBookHandler(e) {
    //     e.preventDefault();
    //     let bookId = e.target.id;
    //     bookService.deleteBookById(bookId)
    //         .then(() => {
    //             ctx.page.redirect('/');
    //         })
    // }
}