function areaAndVolume(area, vol, input) {
    let result = []
    let parsedData = JSON.parse(input)
    for (const obj of parsedData) {
        let objObj = {
            area: area.call(obj),
            volume: vol.call(obj)
        }
        result.push(objObj)
    }
    return result
}

// console.log(areaAndVolume(area, vol, '[ { "x": "10", "y": "-22", "z": "10" }, { "x": "47", "y": "7", "z": "-5" }, { "x": "55", "y": "8", "z": "0" }, { "x": "100", "y": "100", "z": "100" }, { "x": "55", "y": "80", "z": "250" }]'))

function  area()  {    
    return  Math.abs(this.x  *  this.y);
};

function  vol()  {    
    return  Math.abs(this.x  *  this.y  *  this.z);
};


function solution2(n) {
    return function num(num) {
        return num + n
    }
}
// let add5 = solution2(5);
// console.log(add5(2));
// console.log(add5(3));


function solution3() {
    let result = ''
    return {
        append(str) {
            result += str
        },
        removeStart(n) {
            result = result.substring(n)
        },
        removeEnd(n) {
            result = result.substring(0, result.length - n)
        },
        print() {
            console.log(result)
        }
    }
}
let firstZeroTest = solution3();
// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print();

function filterEmpl(data, criteria) {
    criteria = criteria.split('-')
    let parsedData = JSON.parse(data)
    let count = 0
    for (const obj of parsedData) {
        if (obj[criteria[0]] === criteria[1] || obj[criteria[0]] === 'all') {
            console.log(`${count}. ${obj['first_name']} ${obj['last_name']} - ${obj.email}`)
            count++
        }
    }
}

function filterEmpl2(data, criteria) {
    criteria = criteria.split('-');
    let count = 0;
    JSON
        .parse(data)
        .forEach(x => sorted.call(x));

    function sorted() {
        if (this[criteria[0]] === criteria[1] || criteria[0] === 'all') {
            console.log(`${count++}. ${this.first_name} ${this.last_name} - ${this.email}`)
        }
    }
}
// console.log(filterEmpl2(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//     }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//     },
//     {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//     }]`,
//     'gender-Female'))


function listProcessor(arr) {
    let modify = (function() {
        let result = []
        return {
            add(str) {
                result.push(str)
            },
            remove(str) {
                while (result.includes(str)) result.splice(result.indexOf(str), 1)
            },
            print() {
                console.log(result.join(','))
            }
        }
    })()
    arr.forEach(line => {
        let [command, str] = line.split(' ')
        modify[command](str)
    })
}
// listProcessor(['add hello', 'add again', 'add again', 'remove again', 'print'])


function cars() {
    let iife = (function() {
        return {
            create(name) {
                let obj = { name }
            },
            create(name, inherit, parentName) {
                obj[name] = parentName
            },
            set(name, key, value) {
                obj[name] = { key: value }
            },
            print(name) {
                console.log(obj.name)
            }
        }
    })
}
// cars([
//     'create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2'
// ])


//exercise

function sum(arr, type) {
    let objMethods = {
        'asc': function(a, b) {
            return a - b
        },
        'desc': (a, b) => b - a
    }
    return arr.sort(objMethods[type])
}