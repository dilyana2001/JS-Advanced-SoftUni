function addItem() {
    let input = document.querySelector('#newItemText')
    let listInHTML = document.querySelector('#items')

    let newElement = document.createElement('li')
    newElement.textContent = input.value
    listInHTML.appendChild(newElement)

    input.value = ''
}