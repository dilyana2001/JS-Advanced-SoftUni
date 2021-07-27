function deleteByEmail() {
    let customers = document.querySelectorAll('#customers tbody tr');
    let result = document.querySelector('#result');
    let inputEmail = document.querySelector('label input')

    for (let costumer of customers) {
        let email = costumer.querySelectorAll('td')[1];
        if (inputEmail.value.includes(email.textContent)) {
            costumer.remove();
            result.textContent = `Deleted`;
        } else {
            result.textContent = `Not found.`;
        }
    }
    inputEmail.value = '';
}