const numberOperations = require('./number-operations.js')
const { expect } = require('chai');

describe('numberOperations tests', () => {

    describe('powNumber', () => {

        it('Test 1', () => {
            let num = 3;
            expect(numberOperations.powNumber(num)).to.equal(9);
        });

        it('Test 1', () => {
            let num = 0;
            expect(numberOperations.powNumber(num)).to.equal(0);
        });

        it('Test 1', () => {
            let num = 1;
            expect(numberOperations.powNumber(num)).to.equal(1);
        });

        it('Test 1', () => {
            let num = -1;
            expect(numberOperations.powNumber(num)).to.equal(1);
        });

        it('Test 1', () => {
            let num = -3;
            expect(numberOperations.powNumber(num)).to.equal(9);
        });
    });

    describe('numberChecker', () => {

        it('Test 1', () => {
            let input = Number('k');
            expect(() => numberOperations.numberChecker(input)).to.throw();
        });

        it('Test 1', () => {
            let input = undefined;
            expect(() => numberOperations.numberChecker(input)).to.throw();
        });

        it('Test 1', () => {
            let input = 99;
            expect(numberOperations.numberChecker(input)).to.equal('The number is lower than 100!');
        });

        it('Test 1', () => {
            let input = 100;
            expect(numberOperations.numberChecker(input)).to.equal('The number is greater or equal to 100!');
        });

        it('Test 1', () => {
            let input = 101;
            expect(numberOperations.numberChecker(input)).to.equal('The number is greater or equal to 100!');
        });
    });

    describe('sumArrays', () => {

        it('Test 1', () => {
            let array1 = [2, 7];
            let array2 = [1, 4, 8];
            expect(numberOperations.sumArrays(array1, array2)).to.deep.equal([3, 11, 8]);
        });

        it('Test 1', () => {
            let array1 = [2];
            let array2 = [1, 4];
            expect(numberOperations.sumArrays(array1, array2)).to.deep.equal([3, 4]);
        });

        it('Test 1', () => {
            let array1 = [0];
            let array2 = [0, 0, 0];
            expect(numberOperations.sumArrays(array1, array2)).to.deep.equal([0, 0, 0]);
        });

        it('Test 1', () => {
            let array1 = [2, -6, -4];
            let array2 = [1, 4];
            expect(numberOperations.sumArrays(array1, array2)).to.deep.equal([3, -2, -4]);
        });

        it('Test 1', () => {
            let array1 = [-2];
            let array2 = [0];
            expect(numberOperations.sumArrays(array1, array2)).to.deep.equal([-2]);
        });
    });
});