function argumentInfo(arr) {
    let typeObj = {};
    arr.forEach(x => {
        console.log(`${typeof x}: ${x}`);
        let counter = 0;
        !typeObj.hasOwnProperty(typeof x) ? typeObj[typeof x] = ++counter : typeObj[typeof x] += ++counter;
    })
    Object.entries(typeObj).map(x => console.log(`${x[0]} = ${x[1]}`));
}
argumentInfo(['cat', 34, 42, function() { console.log('Hello world!'); }])