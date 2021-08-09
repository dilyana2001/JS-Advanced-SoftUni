function attachEvents() {
    let btnLoad = document.getElementById('btnLoad');
    let phonebook = document.getElementById('phonebook');
    let baseUrl = 'http://localhost:3030/';
    let btnCreate = document.getElementById('btnCreate');
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');

    btnLoad.addEventListener('click', () => {
        phonebook.textContent = '';
        fetch(`${baseUrl}jsonstore/phonebook`)
            .then(res => res.json())
            .then(result => {
                Object.values(result).forEach(x => {
                    let contact = document.createElement('li');
                    let deleteBtn = document.createElement('button');
                    contact.textContent = `${x.person}: ${x.phone}`;
                    deleteBtn.textContent = `Delete`;
                    phonebook.appendChild(contact);
                    deleteBtn.addEventListener('click', () => {
                        fetch(`${baseUrl}jsonstore/phonebook/${x._id}`, {
                                method: 'DELETE'
                            })
                            .then(res => res.json())
                            .then(x => console.log(`Deleted ${Object.values(x).person}: ${Object.values(x).phone}`))
                            .catch(() => console.log(`Error with loading contacts.`));
                    })
                    contact.appendChild(deleteBtn);
                })
            })
            .catch(() => console.log(`Error`));

    })

    btnCreate.addEventListener('click', () => {
        fetch(`${baseUrl}jsonstore/phonebook`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    person: personInput.value,
                    phone: phoneInput.value,
                })
            })
            .then(res => res.json())
            .then(x => console.log(`Created! ${x.person}`))
            .catch(() => console.log(`Error with creation.`));
        personInput.value = '';
        phoneInput.value = '';
    })

}

attachEvents();