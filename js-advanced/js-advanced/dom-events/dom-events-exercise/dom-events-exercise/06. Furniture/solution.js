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
