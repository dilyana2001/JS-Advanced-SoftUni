let guestCount = 99;
let engagementPromise = new Promise(function(resolve, reject) {
    if (guestCount > 100) {
        setTimeout(function() {
            reject('Wedding to big')
        }, 1000)
    } else {
        setTimeout(function() {
            resolve('Lets get marry!')
        }, 4000)
    }
})

engagementPromise
    .then(function(m) {
        console.log(('promise fulfilled'));
        console.log(m);
    })
    .catch((r) => {
        console.log(`promise rejected`);
        console.log(r);
    })

console.log(`preparaions`);

let alwaysReject = Promise.reject(`some reason`)
let alwaysResolve = Promise.resolve('Agree')

alwaysReject.catch()
alwaysResolve.then()


const formElement = document.querySelector('form');
formElement.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(formElement);
    const email = data.get('email'); // Read single value
    const entries = [...data.entries()]; // Get array of values
});


const authToken = response.authToken;
sessionStorage.setItem('authToken', authToken);

fetch('/articles', {
    method: 'get',
    headers: { 'X-Authorization': authToken }
});

fetch(`${baseUrl}jsonstore/collections/students/e105e714-dca1-4487-bf08-b084882d25b2`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(x => console.log(x))