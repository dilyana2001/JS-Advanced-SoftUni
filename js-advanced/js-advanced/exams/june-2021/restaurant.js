class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach(x => {
            let [name, quantity, totalPrice] = x.split(' ');
            quantity = Number(quantity);
            totalPrice = Number(totalPrice);

            if (this.budgetMoney - totalPrice < 0) {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
                return;
            }
            if (!this.stockProducts.hasOwnProperty(name)) {
                this.stockProducts[name] = 0;
            }
            this.stockProducts[name] += quantity;
            this.budgetMoney -= totalPrice;
            this.history.push(`Successfully loaded ${quantity} ${name}`);

        });
        return this.history.join('\n');
    }

    addToMenu(meal, products, price) {
        price = Number(price);
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                products,
                price
            };
            if (Object.keys(this.menu).length == 1) {
                return `Great idea! Now with the ${Object.keys(this.menu)[0]} we have 1 meal in the menu, other ideas?`;
            }
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }
        return `The ${meal} is already in the our menu, try something different.`;
    }

    showTheMenu() {
        let result = [];
        for (const x in this.menu) {
            result.push(`${x} - $ ${this.menu[x].price}`);
        }
        if (result.length == 0) {
            return "Our menu is not ready yet, please come later...";
        }
        return result.join('\n');
    }

    // makeTheOrder(meal) {
    //     if (!this.menu.hasOwnProperty(meal)) {
    //         return `There is not ${meal} yet in our menu, do you want to order something else?`;
    //     }

    //     let allInstock = true;
    //     this.menu[meal].products.forEach(x => {
    //         let [mealProduct, ] = x.split(' ');
    //         if (!this.stockProducts.hasOwnProperty(mealProduct)) {
    //             allInstock = false;
    //             return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
    //         }
    //     });

    //     if (allInstock) {
    //         this.menu[meal].products.forEach(meal => {
    //             let [mealProduct, mealQuantity] = meal.split(' ');
    //             mealQuantity = Number(mealQuantity);
    //             if (this.stockProducts[mealProduct].quantity >= mealQuantity) {
    //                 this.stockProducts[mealProduct].quantity -= mealQuantity;
    //             }
    //         });
    //         this.budgetMoney += Number(this.menu[meal].price);
    //         return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    //     }
    // }

    makeTheOrder(meal) {
        let orderedMeal = this.menu[meal];
        if (orderedMeal == undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        let orderedMealProducts = orderedMeal.products;
        let orderedMealPrice = orderedMeal.price;

        for (let product of orderedMealProducts) {
            let [name, quantity] = product.split(" ");
            if (this.stockProducts[name] == undefined ||
                this.stockProducts[name] < quantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
            this.stockProducts[name] -= quantity;
        }
        this.budgetMoney += orderedMealPrice;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${orderedMealPrice}.`;
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('supa'));
console.log(kitchen.makeTheOrder('frozenYogurt'));