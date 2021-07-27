// function solve() {
//     let generateButton = document.querySelectorAll('#exercise button')[0];
//     let generateInput = document.querySelectorAll('#exercise textarea')[0];
//     let buyButton = document.querySelectorAll('#exercise button')[1];
//     let buyInput = document.querySelectorAll('#exercise textarea')[1];
//     let table = document.querySelector('.col-md-12 tbody');
//     let component = table.querySelector('tr');
//     generateButton.addEventListener('click', generateItems);
//     buyButton.addEventListener('click', buyItems);

//     function generateItems() {
//         let parsedData = JSON.parse(generateInput.value);
//         parsedData.forEach(obj => {
//             let element = component.cloneNode(true);
//             element.querySelector('td img').setAttribute('src', obj.img);
//             element.querySelector('td:nth-child(2) p').textContent = obj.name;
//             element.querySelector('td:nth-child(3) p').textContent = Number(obj.price);
//             element.querySelector('td:nth-child(4) p').textContent = Number(obj.decFactor);
//             element.querySelector('td input').disabled = false;
//             table.appendChild(element);
//         })
//     }

//     function buyItems() {
//         let tableRows = Array.from(table.querySelectorAll('tr'));
//         let checked = tableRows.filter(row => row.querySelectorAll('input:checked').length > 0); // filter checked inputs
//         let names = checked.map(name => name.querySelector('td:nth-child(2) p')).map(x => x.textContent).join(', ');
//         let price = checked.map(price => price.querySelector('td:nth-child(3) p')).map(x => Number(x.textContent)).reduce((a, b) => (a + b), 0);
//         let average = checked.map(dec => dec.querySelector('td:nth-child(4) p')).map(x => Number(x.textContent));
//         let averageDec = average.reduce((a, b) => a + b, 0) / average.length;
//         buyInput.textContent = `Bought furniture: ${names}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${averageDec.toFixed(2)}`;
//     }
// }


function solve() {
    let generateBtn = document.querySelector('button');
    let buyBtn = Array.from(document.querySelectorAll('button'))[1];

    const tableBody = document.querySelector('tbody');
    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);


    function generate() {
        let textArea = document.querySelector('textarea').value;

        let parsedArray = JSON.parse(textArea);

        for (let furniture of parsedArray) {
            let tableRowElement = document.createElement('tr');

            let tdImage = document.createElement('td');
            let tdName = document.createElement('td');
            let tdPrice = document.createElement('td');
            let tdFactor = document.createElement('td');
            let tdMark = document.createElement('td');

            tableRowElement.appendChild(tdImage);
            tableRowElement.appendChild(tdName);
            tableRowElement.appendChild(tdPrice);
            tableRowElement.appendChild(tdFactor);
            tableRowElement.appendChild(tdMark);

            let image = document.createElement('img');
            image.src = furniture.img;
            tdImage.appendChild(image);

            tdName.innerText = furniture.name;
            tdPrice.innerText = furniture.price;
            tdFactor.innerText = furniture.decFactor;

            let checkBox = document.createElement('input');
            checkBox.type = 'checkbox';

            tdMark.appendChild(checkBox);

            tableBody.appendChild(tableRowElement);
        }
    }

    function buy() {
        let resultTextArea = Array.from(document.querySelectorAll('textarea'))[1];
        let output = [];

        let toBuy = Array.from(document.querySelectorAll('input[type="checkbox"]'))
            .filter(e => e.checked === true)
            .map(e => e.parentNode.parentNode);

        let bought = toBuy.map(e => Array.from(e.querySelectorAll('td'))[1].innerText)
            .join(', ');

        output.push(`Bought furniture: ${bought}`);

        let totalPrice = toBuy.map(e => Array.from(e.querySelectorAll('td'))[2].innerText).map(Number)
            .reduce((acc, current) => acc + current, 0);

        output.push(`Total price: ${totalPrice.toFixed(2)}`);

        let averageFactor = toBuy.map(e => Array.from(e.querySelectorAll('td'))[3].innerText).map(Number)
            .reduce((acc, current) => acc + current, 0) / toBuy.length;

        output.push(`Average decoration factor: ${averageFactor}`);

        resultTextArea.value = output.join('\n');
    }
}