import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import furnitureServices from '../../services/furnitureServices.js';

const furnitureTemplate = (furniture) => html `
      <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="" />
                            <p>${furniture.description}</p>
                            <footer>
                                <p>Price: <span>${furniture.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${furniture._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
      </div>
`;

const furninuresListTemplate = (furnitures) => html `
  ${furnitures.map(x=> html `${furnitureTemplate(x)}`)} 
`;

const containerTemplate = (furnitures) => html `
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top" id="furniture-holder">
           ${furninuresListTemplate(furnitures)}
        </div>
    </div>    
`;

let rootElement = document.querySelector('#root');

export default function (context) {
    furnitureServices.getAllFurnitures()
        .then(result => {
            console.log(result);
            render(containerTemplate(result), rootElement)
        })
        .catch((err) => console.log(err.message))

}