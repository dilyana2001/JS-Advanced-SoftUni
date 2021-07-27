const greet = name => console.log(`Hello, ${name}`)

let person = {
        firstName: 'Pesho',
        lastName: 'Keshov',
        talk: function() {
            greet('Soso')
        },
        greet: greet
    }
    // person.talk('Hoho')

let person1 = Object.assign({}, person) // klonira i syzdava kym nova referenciq, vzema dannite na person
let person2 = person // kym sy6tata referenciq, person2 shte se promenq zaedno s person

let received = '{ "manager": { "firstName": "John", "lastName": "Doe" } }'
let data = JSON.parse(received)
    // console.log(data.manager.firstName)