function fly() {
    console.log(this);
}
let hero = {
    name: 'Superman',
    fly,
}

// fly()
// hero.fly()


// object method notation
let person = {
    name: 'Superman',
    otherFunc() {
        // 
    },
}


// implicit - call a function by default
// explicit - call a function with context using call(nameOfContextObject, argOne,...., argN), apply(nameOfContextObject, [argOne,...., argN]) or bind(nameOfContextObject, args..) 


//methods call(), apply(), bind() 
// call(nameOfContextObject, argOne,...., argN), apply(nameOfContextObject, [argOne,...., argN]) or bind(nameOfContextObject, args..) 
//change function context

function fly2(info) {
    console.log(`${this.name} is flying! ${info}`);
}
// fly2() // is flying!

let contextObject = {
    name: 'Wonder Woman'
}

// call(nameOfContextObject, argOne,...., argN)
// fly2.call(contextObject) // with special, assigned context from us, not global context
// fly2.call({ name: 'Baba ti' }) // with special, assigned context from us, not global context

// fly2() // global context

// apply(nameOfContextObject, [argOne,...., argN])
// fly2.apply({ name: ' Didi G' }, ['While peeing'])

//bind(nameOfContextObject, args..)
let wonderWomanFly = fly2.bind(contextObject, ['grrrrrrrr'])
let wonder = fly2.bind(contextObject)
    // wonder('Without underwear')
    // wonderWomanFly()

//eventListener
// const boundRespond = person.respond.bind(person)
// document.addEventListener('click', boundRespond)
// OR  document.addEventListener('click', person.respond.bind(person)) 

function hello(name) {
    return `Hello ${name}`
}

function fancyHello(person) {
    return `Hello mr. ${person}!`
}

function greet(personName, sayHello) {
    return sayHello(personName)
}

// console.log(greet('Pesho', hello))
// console.log(greet('Stamat', fancyHello))

//return function 
function anotherGreet(firstName) {
    return function(message) {
        console.log(`Hello ${firstName}, ${message}`)
    }
}
let greetPesho = anotherGreet('Pesho')
    // greetPesho(`how are you, today?`)
    // greetPesho(`fuck off, nigger!`)

//predicat return true or false value

function isFound(el) { //return true of false
    return el > 10;
}
// console.log(isFound(5)) // false

//predicat 
let numbers = [1, 4, 10, -11, 23]

function isOdd(number) {
    return number % 2 != 0
}

let blaBla = numbers.filter(x => x % 2 != 0)

// вградени higher order functions 
// filer, map, reduse...
// вградена higher order function (filter) s predikat (isOdd)
let oddNumbers = numbers.filter(isOdd)

// console.log(oddNumbers)
// console.log(blaBla)

// referential transparency
// (2, mult(2,4)) , we can change is with (2, 8) , if we know the value (to optimize)

//CLOSURE 
// funkciq wyw funkciq, koqto vry6ta s return , block scope na glavnata funkciq se qvqva closure na wytreshnata 
// zapazwa se w heap pametta

function endGame() {
    let avengers = ['Ironman', 'Spiderman']
        // block scope === closure for asamble

    function asamble() { // asamble(avengers)
        let enemy = 'Thanos'
        console.log(`u a`);
        console.log(avengers.join(', '));
        console.log(`${enemy}`);
    }
    // asamble(avengers)
    return asamble
}

// endGame()
let finalAct = endGame()
    // finalAct()


//Closure v IIFE sintakisa (function(){})() ---- imidiate invoke function expression
const example = (function() {
        let count = 0
        return function() {
            console.log(count++)
        }
    })()
    // example() // 1
    // example() // 2
    // example() // 3


//partial app - funkcii s proizvolen broi args, koito sa implementirani ( внедрени)
function hey(name, message) {
    console.log(`hey ${name}, ${message}`);
}
//not good
let greetMaria = function(message) {
    hey('Maria', message)
}

// hey('Stamat', 'hoo')
// greetMaria('hi')
// greetMaria('asl')
// greetMaria('pls')

//good
let greetHiMaria = hey.bind(null, 'Marias')

// greetHiMaria('hi')
// greetHiMaria('asl')
// greetHiMaria('pls')


//currying unarni finkcii s po edin parametyr

function wazaaa(name) {
    return function(message) {
        console.log(`hey ${name}, you #${message}`);
    }
}
//one way
let greetMe = wazaaa('tabana')
    // greetMe('dqvolo')

//better way most used
// wazaaa('gosho')('wazaaa')

//syvkupnost ot unarni carrying funkcii


function sum3(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
// console.log(sum3(5)(5)(8));