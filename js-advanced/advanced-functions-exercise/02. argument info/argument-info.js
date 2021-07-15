function argumentInfo(...arr) {
    let typeObj = {};
    arr.forEach(el => {
        solve(el)
    })
    Object.entries(typeObj)
        .sort((a, b) => b[1] - a[1])
        .map(x => console.log(`${x[0]} = ${x[1]}`));

    function solve(x) {
        let counter = 0;
        !typeObj.hasOwnProperty(typeof x) ? typeObj[typeof x] = ++counter : typeObj[typeof x] += ++counter;
        console.log(`${typeof x}: ${x}`);
    }
}
argumentInfo({ name: 'bob' }, 3.333, 9.999)