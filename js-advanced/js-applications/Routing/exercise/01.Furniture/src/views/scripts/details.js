import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import furnitureServices from '../../services/furnitureServices.js';

const containerTemplate = (furniture) => html `
<div class="container">
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${furniture.img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${furniture.make}</span></p>
        <p>Model: <span>${furniture.model}</span></p>
        <p>Year: <span>${furniture.year}</span></p>
        <p>Description: <span>${furniture.description}</span></p>
        <p>Price: <span>${furniture.price} $</span></p>
        <p>Material: <span>${furniture.material}</span></p>
        <div>
            <a href="#" id="${furniture._id}" @click=${furniture.editFurniture} class="btn btn-info">Edit</a>
            <a href="#" id="${furniture._id}" @click=${furniture.deleteFurniture} class="btn btn-red">Delete</a>
        </div>
    </div>
</div>
</div>
`;
let rootElement = document.getElementById('root');




export default function(context) {
    furnitureServices.getFurnitureById(context.params.id)
        .then(result => {
            result.editFurniture = onEditFurnitureHandler;
            result.deleteFurniture = onDeleteFurnitureHandler;
            render(containerTemplate(result), rootElement);
        })
        .catch((err) => console.log(err.message));

    function onDeleteFurnitureHandler(e) {
        e.preventDefault();
        let furnitureId = e.target.id;
        furnitureServices.deleteFurnitureById(furnitureId)
            .then(() => {
                context.page.redirect('/home');
            })
    }

    function onEditFurnitureHandler(e) {
        e.preventDefault();
        context.page.redirect(`/edit/${context.params.id}`);
    }
}