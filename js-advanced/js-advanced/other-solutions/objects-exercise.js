function townsToJSON(input) {
    let data = input.map(row => row.split('|').filter(x => x != '').map(x => x.trim()))
    let properties = data.shift()
    let result = []
    data.forEach(row => {
        let town = {
            [properties[0]]: row[0],
            [properties[1]]: Number(Number(row[1]).toFixed(2)),
            [properties[2]]: Number(Number(row[2]).toFixed(2)),
        }
        result.push(town)
    })
    console.log(JSON.stringify(result))
}
// townsToJSON([
//     '| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |'
// ])

function sumByTwo(input) {
    let sum = {};
    for (let i = 0; i < input.length; i += 2) {
        let city = input[i]
        if (!sum.hasOwnProperty(city)) {
            sum[city] = 0
        }
        sum[city] += Number(input[i + 1])
    }
    console.log(JSON.stringify(sum))
}
// sumByTwo(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']) 

function populationInTowns(input) {
    let data = input.map(row => row.split('<->').map(x => x.trim()))
    let sum = {}
    for (let i = 0; i < data.length; i++) {
        let city = data[i][0]
        if (!sum.hasOwnProperty(city)) {
            sum[city] = 0
        }
        sum[city] += Number(data[i][1])
    }
    for (let key in sum) {
        console.log(`${key} : ${sum[key]}`)
    }
}
// populationInTowns([
//     'Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000'
// ])
// populationInTowns([
//     'Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000'
// ])

function fromJSONtoHTML(input) {
    let json = JSON.parse(input)
    let html = '<table>\n'
    html += `<tr>${Object.keys(json[0]).map(x=>`<th>${x}</th>`).join('')}</tr>\n`
    html += `<tr>${Object.values(json[0]).map(x=> `<td>${x}</td>`).join('')}</tr>\n`
    json.shift()
    html += `<tr>${Object.values(json[0]).map(x=> `<td>${x}</td>`).join('')}</tr>\n</table>`
    console.log(html)
}
// fromJSONtoHTML(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])

function cityRecord(name, population, treasury) {
    let city = {
        name: name,
        population: Number(population),
        treasury: Number(treasury),
        taxRate: 10,
        collectTaxes() {
            city.treasury += city.population * city.taxRate
        },
        applyGrowth(percentage) {
            city.population = (city.population * percentage * 0.01) + city.population
        },
        applyRecession(percentage) {
            city.treasury = city.treasury - (city.treasury * percentage * 0.01)
        }
    }
    return city
}
// const city =
//     cityRecord('Tortuga',
//         7000,
//         15000)
// console.log(city)
// city.collectTaxes()
// console.log(city.treasury)
// city.applyGrowth(5)
// console.log(city.population)


function calorieObject(input) {
    let obj = {}
    for (let i = 0; i < input.length; i += 2) {
        let product = input[i]
        let quantity = Number(input[i + 1])
        if (!obj.hasOwnProperty(product)) {
            obj[product] = quantity
        }
    }
    console.log(obj)
}
// calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])


function constructionCrew(input) {
    if (input.dizziness === true) {
        let request = 0.1 * input.weight * input.experience
        input.levelOfHydrated += request
        input.dizziness = false
    }
    return input
}
// console.log(constructionCrew({
//     weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true
// }))

// //     { weight: 80,
// //     experience: 1,
// //     levelOfHydrated: 8,
// //     dizziness: false }

// console.log(constructionCrew({
//     weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true
// }))
// //     { weight: 120,
// //     experience: 20,
// //     levelOfHydrated: 440,
// //     dizziness: false }

// console.log(constructionCrew({
//     weight: 95,
//     experience: 3,
//     levelOfHydrated: 0,
//     dizziness: false
// }))

// //     { weight: 95,
// //     experience: 3,
// //     levelOfHydrated: 0,
// //     dizziness: false}



function carFactory(input) {
    if (input.power <= 90) {
        input.power = {
            power: 90,
            volume: 1800
        }
    } else if (input.power <= 120) {
        input.power = {
            power: 120,
            volume: 2400
        }
    } else if (input.power <= 200) {
        input.power = {
            power: 200,
            volume: 3500
        }
    }
    input['engine'] = input['power']
    delete input['power']
    if (input.carriage === 'hatchback') {
        delete input['carriage']
        input.carriage = {
            type: 'hatchback',
            color: input.color
        }
    } else {
        delete input['carriage']
        input.carriage = {
            type: 'coupe',
            color: input.color
        }
    }
    if (input.wheelsize % 2 === 0) {
        input.wheelsize = [(input.wheelsize - 1), (input.wheelsize - 1), (input.wheelsize - 1), (input.wheelsize - 1)]
    } else {
        input.wheelsize = [(input.wheelsize), (input.wheelsize), (input.wheelsize), (input.wheelsize)]
    }
    delete input.color
    input['wheels'] = input['wheelsize']
    delete input['wheelsize']
    console.log(input)
}
// carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// })

// {
//     model: 'VW Golf II',
//     engine: {
//         power: 90,
//         volume: 1800
//     },
//     carriage: {
//         type: 'hatchback',
//         color: 'blue'
//     },
//     wheels: [13, 13, 13, 13]
// }

// carFactory({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// })

// {
//     model: 'Opel Vectra',
//     engine: {
//         power: 120,
//         volume: 2400
//     },
//     carriage: {
//         type: 'coupe',
//         color: 'grey'
//     },
//     wheels: [17, 17, 17, 17]
// }


function heroicInventory(input) {
    let result = []
    input.map(row => row.split('/').map(x => x.trim())).forEach(row => {
        row[2] = row[2].split(', ')
        let heroes = {
            name: row[0],
            level: Number(row[1]),
            items: row[2]
        }
        result.push(heroes)
    })
    console.log(JSON.stringify(result))
}
// heroicInventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ])


function storage(strArr) { // storage.get(product) => kliu4ovata komanda. NA storage ,vzemame producta, qwno vytre s imeto i quantitito?
    let storage = new Map()
    for (let el of strArr) {
        let line = el.split(' ')
        let product = line[0]
        let quantity = Number(line[1])
        if (!storage.has(product)) {
            storage.set(product, quantity) // ako nqmame tozi product, izvedi vsqka dvoika bez promqna
        } else {
            let currentQuantity = storage.get(product); // ako go imame , syzdavame promenliva, koqto da GETVA produkta ot storage-a ni
            let newQuantity = currentQuantity + quantity // druga promenliva, koqto da dobavq kym veche sy6testvuvashta dvoika koli4estvoto
            storage.set(product, newQuantity) // SETVAME veche novata PREZAPISANA dvoika
        }
    }
    for (let keyValuePair of storage) {
        console.log(`${keyValuePair[0]} -> ${keyValuePair[1]}`) // dvoiki of storage se logvat izvyn gorniq cikyl for
    }
}
// storage([
//     'tomatoes 10',
//     'coffee 5',
//     'olives 100',
//     'coffee 40'
// ])

function lowerPriceInCities(input) {
    let cities = {}
    input.map(row => row.split(' | ')).forEach(row => {
        let product = row[1]
        if (!cities.hasOwnProperty(product)) {
            cities[product] = `${row[2]} (${row[0]})`
        } else {
            if (Number(row[2]) < Number(cities[product].split(' ')[0])) {
                cities[product] = `${row[2]} (${row[0]})`
            }
        }
    })
    for (let key in cities) {
        console.log(`${key} -> ${cities[key]}`)
    }
}
// lowerPriceInCities([
//     'Sofia City | Audi | 100000',
//     'Sofia City | BMW | 100000',
//     'Sofia City | Mitsubishi | 10000',
//     'Sofia City | Mercedes | 10000',
//     'Sofia City | NoOffenseToCarLovers | 0',
//     'Mexico City | Audi | 1000',
//     'Mexico City | BMW | 99999',
//     'New York City | Mitsubishi | 10000',
//     'New York City | Mitsubishi | 1000',
//     'Mexico City | Audi | 100000',
//     'Washington City | Mercedes | 1000'
// ])


function rectangle(width, height, color) {
    let obj = {
        width: width,
        height: height,
        color: color,
        calcArea() {
            return obj.width * obj.height
        }
    }
    obj.color = obj.color.substring(1, 1) + color[0].toUpperCase() + obj.color.substring(1)
    return obj
}
// let rect = rectangle(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());

function createSortedList() {
    let obj = {
        collection: [],
        size: 0,
        add(number) {
            obj.collection.push(number)
            obj.collection.sort((a, b) => a - b)
            obj.size++
        },
        remove(index) {
            if (index < 0 || index > obj.collection.length) {
                return `Error`
            } else {
                obj.collection.splice(index, 1)
                obj.size--
                return
            }
        },
        get(index) {
            if (index < 0 || index > obj.collection.length) {
                return `Error`
            } else {
                return obj.collection[index]
            }
        }
    }
    return obj
}

// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(4));
// list.remove(1);
// console.log(list.get(1))
// console.log(list.size)


function heroes() {
let obj = {
    mage(){

    },
    fighter(){
        
    }
}
}
let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);