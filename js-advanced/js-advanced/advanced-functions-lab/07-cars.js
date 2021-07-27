function cars(arr) {
    let cars = {};
    let commandParser = {
        create(carName, inherits, parentName) {
            (cars[carName] = inherits ? Object.create(cars[parentName]) : {});
        },
        set(carName, key, value) {
            cars[carName][key] = value;
        },
        print(carName) {
            let output = [];
            for (let element in cars[carName]) {
                output.push(`${element}:${cars[carName][element]}`);
            }
            console.log(output.join(', '));
        },
    }

    arr.forEach(line => {
        let [command, ...args] = line.split(' ');
        commandParser[command](...args);
    });
}

cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
])