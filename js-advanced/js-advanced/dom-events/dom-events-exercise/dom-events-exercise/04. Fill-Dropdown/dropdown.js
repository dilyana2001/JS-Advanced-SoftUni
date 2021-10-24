function addItem() {
    let newItemText = document.querySelector('#newItemText');
    let newItemValue = document.querySelector('#newItemValue');
    let dropDownMenu = document.querySelector('#menu');

    let newitem = document.createElement('option');
    newitem.textContent = newItemText.value;
    dropDownMenu.appendChild(newitem);

    newItemText.value = '';
    newItemValue.value = '';
}