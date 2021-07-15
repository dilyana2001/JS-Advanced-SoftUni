function pirates(input) {
    // let index = 0;
    let cities = {};
    // let line = input[index++];

    while (input[0] !== 'Sail') {
        let [town, people, gold] = input.shift().split('||')
        people = Number(people)
        gold = Number(gold)

        if (!cities.hasOwnProperty(town)) {
            cities[town] = {
                population: people,
                goldQuantity: gold
            };
        } else {
            cities[town].population += people;
            cities[town].goldQuantity += gold;
        }

    }
    input.shift()
    while (input[0] !== 'End') {
        let [command, ...args] = input.shift().split('=>')
        let [town, people, gold] = args
        if (command === 'Plunder') {

            people = Number(people)
            gold = Number(gold)
            cities[town].population -= people;
            cities[town].goldQuantity -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (cities[town].population <= 0 || cities[town].goldQuantity <= 0) {
                delete cities[town];
                console.log(`${town} has been wiped off the map!`);
            }

        } else {

            gold += gold

            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else if (cities.hasOwnProperty(town)) {
                cities[town].goldQuantity += gold;
                let totalGold = cities[town].goldQuantity;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${totalGold} gold.`);
            }
        }
    }
    let sorted = Object.entries(cities);
    sorted.sort(([keyA, refA], [keyB, refB]) => [refB.goldQuantity] - [refA.goldQuantity] || keyA.localeCompare(keyB));

    if (sorted.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);

        for (let [cityName, cityInfo] of sorted) {
            let {
                population,
                goldQuantity
            } = cityInfo;
            console.log(`${cityName} -> Population: ${population} citizens, Gold: ${goldQuantity} kg`);
        }
    }
}
pirates([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
])
pirates([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
])