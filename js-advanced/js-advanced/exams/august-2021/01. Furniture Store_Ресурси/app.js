window.addEventListener('load', solve);

function solve() {

    document.getElementById('add').addEventListener('click', addFurnitureHandler)

    function addFurnitureHandler(e) {
        e.preventDefault();
        const model = document.getElementById('model');
        const year = document.getElementById('year');
        const description = document.getElementById('description');
        const price = document.getElementById('price');
        const furnitureList = document.getElementById('furniture-list');

        if (!model.value || !year.value || !description.value ||
            !price.value || year.value <= 0 || price.value <= 0) {
            return;
        }

        furnitureList.appendChild(
            addFurniture(model.value, year.value, description.value, price.value)
        );

        for (let x of document.querySelectorAll('.moreBtn')) { x.addEventListener('click', moreBtnHandler) }
        for (let x of document.querySelectorAll('.buyBtn')) { x.addEventListener('click', buyItBtnHandler) }

        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';
    }

    function addFurniture(model, year, description, price) {
        const fragment = document.createDocumentFragment();

        const furnitureFirstPart = document.createElement('tr');
        furnitureFirstPart.classList = 'info';

        furnitureFirstPart.innerHTML = /*javascript*/ `
                <td>${model} </td>
                <td>${Number(price).toFixed(2)}</td>
                <td>
                    <button class="moreBtn">More Info</button>
                    <button class="buyBtn">Buy it</button>
                </td>
        `;

        const furnitureSecondPart = document.createElement('tr');
        furnitureSecondPart.classList = 'hide';

        furnitureSecondPart.innerHTML = /*javascript*/ `
                <td>Year: ${Number(year)}</td>
                <td colspan="3">Description: ${description}</td>
           `;

        fragment.appendChild(furnitureFirstPart);
        fragment.appendChild(furnitureSecondPart);

        return fragment;
    }

    function moreBtnHandler(e) {
        const hideTrElement = e.target.parentElement.parentElement.nextElementSibling;

        if (e.target.textContent == 'More Info') {
            e.target.textContent = 'Less Info';
            hideTrElement.setAttribute('style', 'display: contents;');
        } else if (e.target.textContent == 'Less Info') {
            e.target.textContent = 'More Info';
            hideTrElement.setAttribute('style', 'display: none;');
        }
    }

    function buyItBtnHandler(e) {
        let totalPriceElement = document.querySelector('.total-price');
        let currentPrice = e.target.parentNode.parentNode.querySelector('td:nth-child(2)');
        totalPriceElement.textContent = (Number(totalPriceElement.textContent) + Number(currentPrice.textContent)).toFixed(2);
        e.target.parentNode.parentNode.nextElementSibling.remove()
        e.target.parentNode.parentNode.remove();
    }
}