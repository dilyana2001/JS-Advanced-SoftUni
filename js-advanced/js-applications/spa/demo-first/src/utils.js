function printName() {
    console.log(`print from utils`);
}

export const someVariable = 'Pesho';

export default printName; // ES6 // we can export whatever we want: string, object, function, array ....
// module.exports = printName; // common js