function sortArray(arr, type) {
    let sorting = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    }
    return arr.sort(sorting[type])
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'))

// function sum(arr, type) {
//     let objMethods = {
//         'asc': function(a, b) {
//             return a - b
//         },
//         'desc': (a, b) => b - a
//     }
//     return arr.sort(objMethods[type])
// }