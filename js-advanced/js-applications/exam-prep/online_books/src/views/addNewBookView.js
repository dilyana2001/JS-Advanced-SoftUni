import { html } from '../../node_modules/lit-html/lit-html.js';
import bookService from '../services/bookService.js';

const addNewBookView = () => html`
<section id="create-page" class="create">
    <form id="create-form" action="" method="">
        <fieldset>
            <legend>Add new Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" placeholder="Title">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" placeholder="Image">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type">
                        <option value="Fiction">Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Add Book">
        </fieldset>
    </form>
</section>
`;

export default function (ctx) {
    ctx.render(addNewBookView());

    const createForm = document.getElementById('create-form');
    createForm.addEventListener('submit', (e) => {
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
        bookService.createBook(data)
            .then((book) => {
                console.log(book);
                ctx.page.redirect(`/details/${book._id}`);
            })
    })
}


