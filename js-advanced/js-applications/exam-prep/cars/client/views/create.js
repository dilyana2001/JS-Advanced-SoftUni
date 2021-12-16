import { html } from '../node_modules/lit-html/lit-html.js';
import service from '../services/service.js';
import utils from '../utils.js';

const create = () => html`
        <section id="create-listing">
            <div class="container">
                <form id="create-form">
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr>
        
                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand">
        
                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model">
        
                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description">
        
                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year">
        
                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl">
        
                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price">
        
                    <hr>
                    <input type="submit" class="registerbtn" value="Create Listing">
                </form>
            </div>
        </section>
`;

export default function (ctx) {
    const isLogged = utils.isLogged();
    ctx.render(create());

    const createForm = document.querySelector('#create-form');
    createForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (!formData.get('brand') || !formData.get('model') || !formData.get('description')
            || !formData.get('year') || !formData.get('imageUrl') || !formData.get('price')) {
            return alert(`All fields are required!`);
        }

        const data = {
            brand: formData.get('brand'),
            model: formData.get('model'),
            description: formData.get('description'),
            year: formData.get('year'),
            imageUrl: formData.get('imageUrl'),
            price: formData.get('price'),
        }
        if (isLogged) {
            service.createCar(data)
                .then((album) => {
                    console.log(album);
                    ctx.page.redirect(`/catalog`);
                })
        }
    })
}