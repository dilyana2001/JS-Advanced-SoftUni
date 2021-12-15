import { html } from '../../node_modules/lit-html/lit-html.js';
import bookService from '../services/bookService.js';

const editBookView = (data) => html`
        <section id="edit-page" class="edit">
            <form id="edit-form">
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" value="${data.title}">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description">${data.description}</textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" value="${data.imageUrl}">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" value="${data.type}">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>
`;

export default function (ctx) {
    bookService.getBookById(ctx.params.bookId)
        .then(data => {
            console.log(data)
            ctx.render(editBookView(data));
            document.getElementById('edit-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                
                if(!formData.get('title') || !formData.get('description') || !formData.get('imageUrl') || !formData.get('type')){
                    return alert(`All fields are required!`);
                }
                const data = {
                    title: formData.get('title'),
                    description: formData.get('description'),
                    imageUrl: formData.get('imageUrl'),
                    type: formData.get('type')
                }
                bookService.editBook(ctx.params.bookId, data)
                    .then((book) => {
                        console.log(book);
                        ctx.page.redirect(`/details/${book._id}`);
                    });
            });
        })
        .catch((err) => console.log(err.message));
}


