function addItem() {
    let input = document.querySelector('#newItemText')
    let listInHTML = document.querySelector('#items')

    let newElement = document.createElement('li')
    newElement.textContent = input.value

    let deleteItem = document.createElement('a')
    deleteItem.setAttribute('href', '#')
        // deleteItem.href = '#'
    deleteItem.textContent = `[Delete]`

    //ettach event
    deleteItem.addEventListener('click', (e) => {
            e.currentTarget.parentNode.remove() // delete the parent who is parent of delete button.
        }) // e(event object).currentTarget(the target whos event is appended on).parentNode(his parent, 
        //cuz out delete button is in it).remove() 

    newElement.appendChild(deleteItem)
    listInHTML.appendChild(newElement)
    input.value = '';
}