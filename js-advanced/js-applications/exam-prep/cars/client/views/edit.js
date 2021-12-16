import { html } from '../node_modules/lit-html/lit-html.js';
import service from '../services/service.js';

const edit = (data) => html`
<section id="edit-listing">
    <div class="container">

        <form id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="${data.brand}" name="brand" value="${data.brand}">

            <p>Car Model</p>
            <input type="text" placeholder="${data.model}" name="model" value="${data.model}">

            <p>Description</p>
            <input type="text" placeholder="${data.description}" name="description" value="${data.description}">

            <p>Car Year</p>
            <input type="number" placeholder="${data.year}" name="year" value="${data.year}">

            <p>Car Image</p>
            <input type="text" placeholder="${data.imageUrl}" name="imageUrl" value="${data.imageUrl}">

            <p>Car Price</p>
            <input type="number" placeholder="${data.price}" name="price" value="${data.price}">

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>
`;

export default function (ctx) {
    service.getCarById(ctx.params.carId)
        .then(data => {
            console.log(data)
            ctx.render(edit(data));
            document.querySelector('#edit-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);

                if (!formData.get('brand') || !formData.get('model') || !formData.get('description')
                    || !formData.get('year') || !formData.get('imageUrl') || !formData.get('price')) {
                    return alert(`All fields are required!`);
                }

                const fetchData = {
                    brand: formData.get('brand'),
                    model: formData.get('model'),
                    description: formData.get('description'),
                    year: formData.get('year'),
                    imageUrl: formData.get('imageUrl'),
                    price: formData.get('price'),
                }
                if (isLogged) {
                    service.editCar(ctx.params.carId, fetchData)
                        .then((newData) => {
                            console.log(newData);
                            ctx.page.redirect(`/details/${newData._id}`);
                        })
                }
            });
        })
}