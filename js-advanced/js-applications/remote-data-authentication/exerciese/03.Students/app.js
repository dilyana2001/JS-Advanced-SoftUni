let formForm = document.getElementById('form');
let resultsTable = document.querySelector('#results tbody');
let baseUrl = 'http://localhost:3030/';
let firstName = document.querySelector('.inputs input[name=firstName]');
let lastName = document.querySelector('.inputs input[name=lastName]');
let facultyNumber = document.querySelector('.inputs input[name=facultyNumber]');
let grade = document.querySelector('.inputs input[name=grade]');

formForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`${baseUrl}jsonstore/collections/students`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
                facultyNumber: facultyNumber.value,
                grade: grade.value,
            })
        })
        .then(res => res.json())
        .then(x => console.log(x))
        .catch(() => console.log(`Error with form`))
    firstName.value = '';
    lastName.value = '';
    facultyNumber.value = '';
    grade.value = '';
})

fetch(`${baseUrl}jsonstore/collections/students`)
    .then(res => res.json())
    .then(result => {
        Object.values(result).forEach(x => {
            let tr = document.createElement('tr');
            let firstName = document.createElement('td');
            let lastName = document.createElement('td');
            let facultyNumber = document.createElement('td');
            let grade = document.createElement('td');

            firstName.textContent = x.firstName;
            lastName.textContent = x.lastName;
            facultyNumber.textContent = x.facultyNumber;
            grade.textContent = x.grade;

            resultsTable.appendChild(tr);
            tr.appendChild(firstName);
            tr.appendChild(lastName);
            tr.appendChild(facultyNumber);
            tr.appendChild(grade);
            console.log(x);
        })
    })
    .catch(() => console.log(`Error with loading contacts.`))

fetch(`${baseUrl}jsonstore/collections/students/e105e714-dca1-4487-bf08-b084882d25b2`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(x => console.log(x))