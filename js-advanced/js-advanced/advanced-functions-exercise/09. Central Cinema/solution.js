function solve() {
    let containerInputs = document.querySelectorAll('#container input');
    let container = document.querySelector('#container button');
    let moviesSector = document.querySelector('#movies>ul');
    let archiveSector = document.querySelector('#archive>ul');
    let clearBtn = document.querySelector('#archive>button')
    container.addEventListener('click', containerHandler);

    function containerHandler(e) {
        e.preventDefault()
        if (!containerInputs[0].value || !containerInputs[1].value || !Number(containerInputs[2].value)) return
        let liItem = document.createElement('li');
        let itemName = document.createElement('span');
        itemName.textContent = containerInputs[0].value;
        let itemHall = document.createElement('strong');
        itemHall.textContent = 'Hall: ' + containerInputs[1].value;
        let itemPrice = document.createElement('div');
        let pricePrice = document.createElement('strong');
        pricePrice.textContent = Number(containerInputs[2].value).toFixed(2);
        let inputPrice = document.createElement('input');
        inputPrice.setAttribute('placeholder', 'Tickets Sold')
        let buttonPrice = document.createElement('button');
        buttonPrice.textContent = 'Archive'


        moviesSector.appendChild(liItem);
        liItem.appendChild(itemName);
        liItem.appendChild(itemHall);
        liItem.appendChild(itemPrice);
        itemPrice.appendChild(pricePrice)
        itemPrice.appendChild(inputPrice)
        itemPrice.appendChild(buttonPrice)
        buttonPrice.addEventListener('click', archiveHandler)

        function archiveHandler() {
            if (inputPrice.value == '' || isNaN(inputPrice.value)) return
            let soldTickets = Number(inputPrice.value);
            let archiveLiItem = document.createElement('li');
            let archiverItemName = document.createElement('span');
            archiverItemName.textContent = itemName.textContent
            let archiverItemHall = document.createElement('strong');
            archiverItemHall.textContent = `Total amount: ${(soldTickets*pricePrice.textContent).toFixed(2)}`
            let archiverButtonPrice = document.createElement('button');
            archiverButtonPrice.textContent = 'Delete'

            archiveSector.appendChild(archiveLiItem)
            archiveLiItem.appendChild(archiverItemName)
            archiveLiItem.appendChild(archiverItemHall)
            archiveLiItem.appendChild(archiverButtonPrice)

            archiverButtonPrice.addEventListener('click', innerDeleteHandler)
            clearBtn.addEventListener('click', clearHandler)

            moviesSector.removeChild(liItem)

            function innerDeleteHandler(e) {
                e.target.parentElement.remove()
            }

            function clearHandler() {
                clearBtn.parentElement.children[1].remove()
            }
        }
        containerInputs[0].value = ''
        containerInputs[1].value = ''
        containerInputs[2].value = ''
    }
}