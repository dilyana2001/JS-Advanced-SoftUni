const dealership = require('./dealership.js');
const { expect } = require('chai');

describe('dealership tests', () => {

    describe('newCarCost', () => {

        it('Test 1', () => {
            let oldCarModel = 'Audi A4 B8';
            let newCarPrice = 65000;
            expect(dealership.newCarCost(oldCarModel, newCarPrice)).to.equal(50000);
        });

        it('Test 2', () => {
            let oldCarModel = 'Audi A6 4K';
            let newCarPrice = 120000;
            expect(dealership.newCarCost(oldCarModel, newCarPrice)).to.equal(100000);
        });

        it('Test 3', () => {
            let oldCarModel = 'Audi A8 D5';
            let newCarPrice = 75000;
            expect(dealership.newCarCost(oldCarModel, newCarPrice)).to.equal(50000);
        });

        it('Test 4', () => {
            let oldCarModel = 'Audi TT 8J';
            let newCarPrice = 44000;
            expect(dealership.newCarCost(oldCarModel, newCarPrice)).to.equal(30000);
        });

        it('Test 5', () => {
            let oldCarModel = 'Audi DD KK';
            let newCarPrice = 500000;
            expect(dealership.newCarCost(oldCarModel, newCarPrice)).to.equal(500000);
        });
    });

    describe('carEquipment', () => {
        it('Test 1', () => {
            let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexArr = [0, 1, 2, 3];
            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal(['heated seats', 'sliding roof', 'sport rims', 'navigation']);
        });

        it('Test 2', () => {
            let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexArr = [3];
            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal(['navigation']);
        });

        it('Test 3', () => {
            let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexArr = [0];
            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal(['heated seats']);
        });

        it('Test 4', () => {
            let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexArr = [1];
            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal(['sliding roof']);
        });

        it('Test 5', () => {
            let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexArr = [2];
            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal(['sport rims']);
        });
    });

    describe('euroCategory', () => {
        it('Test 1', () => {
            let category = 4;
            expect(dealership.euroCategory(category)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('Test 2', () => {
            let category = 5;
            expect(dealership.euroCategory(category)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('Test 3', () => {
            let category = 6;
            expect(dealership.euroCategory(category)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });


        it('Test 4', () => {
            let category = 7;
            expect(dealership.euroCategory(category)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('Test 5', () => {
            let category = 0;
            expect(dealership.euroCategory(category)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });

        it('Test 5', () => {
            let category = 1;
            expect(dealership.euroCategory(category)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });

        it('Test 5', () => {
            let category = 2;
            expect(dealership.euroCategory(category)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });

        it('Test 5', () => {
            let category = 3;
            expect(dealership.euroCategory(category)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
});