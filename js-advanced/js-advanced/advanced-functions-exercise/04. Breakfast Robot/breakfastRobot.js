function solution() {
    let stock = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0, };
    let products = {
        apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
        lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
        burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
        prepareRecipe(recipe, quantity) {
            let newValue = {};
            for (const value in this[recipe]) {
                if (this[recipe][value] * quantity > stock[value]) {
                    return `Error: not enough ${value} in stock`;
                }
                newValue[value] = stock[value] - this[recipe][value] * quantity;
            }
            Object.assign(stock, newValue);
            return 'Success';
        }
    };

    function processing(str) {
        let [command, microelementOrRecipe, quantity] = str.split(' ');
        if (command === 'restock') {
            stock[microelementOrRecipe] += Number(quantity);
            return 'Success';
        } else if (command === 'prepare') return products.prepareRecipe(microelementOrRecipe, Number(quantity));
        let outputs = []
        Object.entries(stock).forEach(line => outputs.push(`${line[0]}=${line[1]}`));
        return outputs.join(' ');
    }
    return processing;
}

let manager = solution(); 
console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4')); 
console.log(manager('report'))