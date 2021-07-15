function greatestCommonDivisor(numOne, numTwo) {
    for (let i = numOne; i > 0; i--) {
        let resultOne = numOne % i
        let resultTwo = numTwo % i
        if (resultOne === 0 && resultTwo === 0) {
            console.log(i)
            break
        }
    }
}
// greatestCommonDivisor(2154, 458)

function wordUpperCase(str) {
    // Write a program that extracts all words from a passed in string and converts them to upper case. The
    // extracted words in upper case must be printed on a single line separated by &quot;, &quot;.
    // The input comes as a single string argument - the text to extract and convert words from.
    // The output should be a single line containing the converted string.
    str = str.toUpperCase().split(' ')
    for (let element of str) {
        element.join(' ')
        for (let letter = 0; letter < element.length; letter++) {
            let code = element[letter].charCodeAt()
            if (code < 65 || code > 90) {
                element.splice(letter, 1)
            }
        }
        // element.join('')
        // console.log(element)
    }
    return str
}
// console.log(wordUpperCase('Hi, how are you?'))


function echoFunction(str) {
    console.log(str.length)
    console.log(str)
}
// echoFunction('Hello, JavaScript!')

function stringLength(first, second, third) {
    let sumLength = first.length + second.length + third.length
    let avrgLength = Math.floor(sumLength / 3)
    console.log(`${sumLength}\n${avrgLength}`)
}
// stringLength('chocolate', 'ice cream', 'cake')

function largestNumber(first, second, third) {
    console.log(`The largest number is ${Math.max(first, second, third)}.`)
}
// largestNumber(5, -3, 16)

function circleArea(argument) {
    // Check the type of the input argument. If it is a number, assume it is the radius of a circle and calculate the
    // circle area. Print the area rounded to two decimal places.
    if (typeof argument === 'number') {
        let lice = (argument * argument * Math.PI).toFixed(2)
        console.log(lice)
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`)
    }
}
// circleArea(5)

function mathOperations(first, second, operator) {
    if (operator === '+') {
        console.log(`${first+second}`)
    } else if (operator === '-') {
        console.log(`${first-second}`)
    } else if (operator === '*') {
        console.log(`${first*second}`)
    } else if (operator === '/') {
        console.log(`${first/second}`)
    } else if (operator === '%') {
        console.log(`${first%second}`)
    } else if (operator === '**') {
        console.log(`${first**second}`)
    }
}
// mathOperations(5, 6, '+')

function sumofNumbers(n, m) {
    let sum = 0
    n = Number(n)
    m = Number(m)
    for (let i = n; i <= m; i++) {
        sum += i
    }
    console.log(sum)
}
// sumofNumbers('1', '5')

function squareOfStars(n = 5) {
    let patern = '* '.repeat(n)
    for (let i = 1; i <= n; i++) {
        console.log(patern)
    }
}
// squareOfStars()

function aggregateElements(arr) {
    let sum = 0
    let inverseSum = 0
    let concat = ''
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i])
        inverseSum += Number(1 / arr[i])
        concat += arr[i] + ''
    }
    console.log(`${sum}\n${inverseSum}\n${concat}`)
}
// aggregateElements([1, 2, 3])
// aggregateElements([2, 4, 8, 16])

function fruits(fruit, grams, price) {
    console.log(`I need $${(grams*price/1000).toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`)
}
// fruits('orange', 2500, 1.80)

function sameNumbers(num) {
    num = num.toString().split('')
    let isTrue = true
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }
    for (let i = 1; i < num.length; i++) {
        if (num[i] != num[0]) {
            isTrue = false
            console.log(`${isTrue}\n${sum}`)
            break
        }
    }
    if (isTrue) {
        console.log(`${isTrue}\n${sum}`)
    }
}

function timeToWalk(first, second, third) {
    function pad(num, size = 2) {
        let patern = num + ''
        while (patern.length < size) patern = '0' + patern
        return patern
    }
    let distance = first * second
    let speedMetersSec = third / 3.6
    let time = distance / speedMetersSec
    let restMinutes = Math.floor(distance / 500)
    let timeMin = Math.floor(time / 60)
    let timeSec = Math.round(time - (timeMin * 60))
    let timeHr = Math.floor(time / 3600)
    console.log(`${pad(timeHr)}:${pad(timeMin+restMinutes)}:${pad(timeSec)}`)
}
// timeToWalk(4000, 0.60, 5)
// timeToWalk(2564, 0.70, 5.5)

function wordUpper(str) {
    let pattern = /[\w]+/g
    let result = str.match(pattern)
    console.log(result.join(', ').toUpperCase())
}
// wordUpper('hello')

function validityChecker(x1, y1, x2, y2) {
    if (x1 >= 0 && y1 >= 0 && x2 >= 0 && y2 >= 0) {
        if (x1 === 0 || x2 === 0) {
            console.log(`{${x1}, ${x2}} to {0, 0} is valid`)
        } else {
            console.log(`{${x1}, ${x2}} to {0, 0} is invalid`);
        }
        if (y1 === 0 || y2 === 0) {
            console.log(`{${y1}, ${y2}} to {0, 0} is valid`)
        } else {
            console.log(`{${y1}, ${y2}} to {0, 0} is invalid`);
        }
        if (x1 === y1 || x1 === y2 || y1 === x2) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}
// validityChecker(3, 0, 0, 4)
// validityChecker(2, 1, 1, 1)

function cookingByNumbers(num, com1, com2, com3, com4, com5) {
    switch (com1) {
        case 'chop':
            num /= 2
            console.log(num)
            break
        case 'dice':
            num = Math.sqrt(num)
            console.log(num)
            break
        case 'spice':
            num += 1
            console.log(num)
            break
        case 'bake':
            num *= 3
            console.log(num)
            break
        case 'fillet':
            num -= num * .2
            console.log(num)
            break
    }
    switch (com2) {
        case 'chop':
            num /= 2
            console.log(num)
            break
        case 'dice':
            num = Math.sqrt(num)
            console.log(num)
            break
        case 'spice':
            num += 1
            console.log(num)
            break
        case 'bake':
            num *= 3
            console.log(num)
            break
        case 'fillet':
            num -= num * .2
            console.log(num)
            break
    }
    switch (com3) {
        case 'chop':
            num /= 2
            console.log(num)
            break
        case 'dice':
            num = Math.sqrt(num)
            console.log(num)
            break
        case 'spice':
            num += 1
            console.log(num)
            break
        case 'bake':
            num *= 3
            console.log(num)
            break
        case 'fillet':
            num -= num * .2
            console.log(num)
            break
    }
    switch (com4) {
        case 'chop':
            num /= 2
            console.log(num)
            break
        case 'dice':
            num = Math.sqrt(num)
            console.log(num)
            break
        case 'spice':
            num += 1
            console.log(num)
            break
        case 'bake':
            num *= 3
            console.log(num)
            break
        case 'fillet':
            num -= num * .2
            console.log(num)
            break
    }
    switch (com5) {
        case 'chop':
            num /= 2
            console.log(num)
            break
        case 'dice':
            num = Math.sqrt(num)
            console.log(num)
            break
        case 'spice':
            num += 1
            console.log(num)
            break
        case 'bake':
            num *= 3
            console.log(num)
            break
        case 'fillet':
            num -= num * .2
            console.log(num)
            break
    }
}
// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')


function roadRadar(speed, zone) {
    let status = ''
    let diff = 0
    if (zone === 'motorway') {
        if (speed > 130) {
            diff = speed - 130
            if (diff <= 20) {
                status = 'speeding'
            } else if (diff <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 130 - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a 130 zone`);
        }
    } else if (zone === 'interstate') {
        if (speed > 90) {
            diff = speed - 90
            if (diff <= 20) {
                status = 'speeding'
            } else if (diff <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 90 - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a 90 zone`);
        }
    } else if (zone === 'city') {
        if (speed > 50) {
            diff = speed - 50
            if (diff <= 20) {
                status = 'speeding'
            } else if (diff <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 50 - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a 50 zone`);
        }
    } else if (zone === 'residential') {
        if (speed > 20) {
            diff = speed - 20
            if (diff <= 20) {
                status = 'speeding'
            } else if (diff <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${diff} km/h faster than the allowed speed of 20 - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a 20 zone`);
        }
    }
}
// roadRadar(20, 'residential')