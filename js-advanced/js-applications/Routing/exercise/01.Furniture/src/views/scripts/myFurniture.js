import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import furnitureServices from '../../services/furnitureServices.js';

const furnitureTemplate = (furniture) => html `
       <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="${furniture.img}" />
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

const containerTemplate = (furnitures) => html `
   <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${furnitures.map(x=> html `${furnitureTemplate(x)}`)}
        </div>
    </div>
`;

let rootElement = document.querySelector('#root');

export default function (context) {
    let userId = localStorage.getItem('userId')
    furnitureServices.getMyFurnitures(userId)
    .then(result=>{
      render(containerTemplate(result), rootElement)   
    })
    .catch((err) => console.log(err.message));
}