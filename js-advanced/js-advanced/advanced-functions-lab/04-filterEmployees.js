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
//     }]`,   'gender-Female'))
//

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