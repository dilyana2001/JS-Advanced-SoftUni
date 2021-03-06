const baseUrl = 'http://localhost:3030';
const tbody = document.getElementById('tbody-index');

async function showAllFurniture() {
    tbody.textContent = '';
    fetch(`${baseUrl}/data/furniture`)
        .then(response => response.json())
        .then(result => {
            Object.values(result).forEach(x => {
                const furnitureTh = document.createElement('tr');
                const imgTh = document.createElement('td');
                const nameTh = document.createElement('td');
                const priceTh = document.createElement('td');
                const factorTH = document.createElement('td');
                const markInput = document.createElement('input');
                imgTh.src = x.img;
                nameTh.textContent = x.name;
                priceTh.textContent = `${x.price}$`;
                factorTH.textContent = x.factor;
                markInput.setAttribute('type', 'checkbox')
                markInput.disabled = true;
                tbody.appendChild(furnitureTh);
                furnitureTh.appendChild(imgTh);
                furnitureTh.appendChild(nameTh);
                furnitureTh.appendChild(priceTh);
                furnitureTh.appendChild(factorTH);
                furnitureTh.appendChild(markInput);
            });
        })
        .catch(() => console.log(`Error`));
}
showAllFurniture()