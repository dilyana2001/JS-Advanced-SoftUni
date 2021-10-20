const pizzUni = require('./pizza-place.js');
const { expect } = require('chai');

describe("Pizza place tests", () => {
    describe("makeAnOrder tests", () => {

        it('Should return confirmation message when pizza is ordered.', () => {
            let obj = { orderedPizza: 'Peperoni' };
            expect(pizzUni.makeAnOrder(obj)).to.equal(`You just ordered ${obj.orderedPizza}`);
        });

        it('Should return confirmation message when pizza and druink is ordered.', () => {
            let obj = { orderedPizza: 'Peperoni', orderedDrink: 'Cola' };
            expect(pizzUni.makeAnOrder(obj)).to.equal(`You just ordered ${obj.orderedPizza} and ${obj.orderedDrink}.`);
        });

        it('Should throw error when pizza its not ordered.', () => {
            let obj = {};
            expect(() => pizzUni.makeAnOrder(obj)).to.throw();
        });

        it('Should throw error when only drink is ordered.', () => {
            let obj = { orderedDrink: 'Beer' };
            expect(() => pizzUni.makeAnOrder(obj)).to.throw();
        });

        it('Should throw error when no order.', () => {
            expect(() => pizzUni.makeAnOrder(obj)).to.throw();
        });
    });

    describe("getRemainingWork tests", () => {

        it('Should return all ordered completed when one ready status is given.', () => {
            let statusArr = [{ pizzaName: 'Margaritta', status: 'ready' }];

            expect(pizzUni.getRemainingWork(statusArr)).to.equal('All orders are complete!')
        });

        it('Should return all ordered completed when two ready statuses are given.', () => {
            let statusArr = [
                { pizzaName: 'Margaritta', status: 'ready' },
                { pizzaName: 'Peperoni', status: 'ready' }
            ];

            expect(pizzUni.getRemainingWork(statusArr)).to.equal('All orders are complete!')
        });

        it('Should return remaining pizzas when is one pending order.', () => {
            let statusArr = [
                { pizzaName: 'Margaritta', status: 'preparing' },
                { pizzaName: 'Peperoni', status: 'ready' }
            ];

            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: ${statusArr[0].pizzaName}.`)
        });

        it('Should return remaining pizzas when are more pending orders.', () => {
            let statusArr = [
                { pizzaName: 'Margaritta', status: 'preparing' },
                { pizzaName: 'Peperoni', status: 'preparing' }
            ];

            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: ${statusArr[0].pizzaName}, ${statusArr[1].pizzaName}.`)
        });
    });

    describe("orderType tests", () => {

        it('Should return totalSum when type of order is Delivery', () => {
            let totalSum = 10;
            let orderType = 'Delivery';
            expect(pizzUni.orderType(totalSum, orderType)).to.equal(totalSum);
        });

        it('Should return totalSum with discount when type of order is Carry Out.', () => {
            let totalSum = 10;
            let orderType = 'Carry Out';
            expect(pizzUni.orderType(totalSum, orderType)).to.equal(9);
        });

        it('Should return totalSum with discount when using floating point number.', () => {
            let totalSum = 10.5;
            let orderType = 'Carry Out';
            expect(pizzUni.orderType(totalSum, orderType)).to.equal(9.45);
        });
    });
});