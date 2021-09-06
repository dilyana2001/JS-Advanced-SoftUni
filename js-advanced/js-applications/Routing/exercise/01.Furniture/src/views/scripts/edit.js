import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import furnitureServices from '../../services/furnitureServices.js';


const containerTemplate = (furniture) => html `
  <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form id="editFurnitureForm">
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model" value="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year" value="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="image">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="material">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
    </div>`;

let rootElement = document.getElementById('root');

export default function(context) {
    render(containerTemplate(context.params), rootElement);

    let editFurnitureForm = document.getElementById('editFurnitureForm');

    editFurnitureForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        furnitureServices.editFurnitureById(context.params.id, formData)
            .then(() => {
                context.page.redirect(`/details/${context.params.id}`);
            })
            .catch((err) => console.log(err.message));
    })
}