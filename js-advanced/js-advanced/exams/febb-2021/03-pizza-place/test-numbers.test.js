const testNumbers = require('./test-numbers.js');
const { expect } = require('chai');

describe('testNumbers tests', () => {

    describe('sumNumbers', () => {

        it('Test 1', () => {
            let num1 = '';
            let num2 = [];
            expect(testNumbers.sumNumbers(num1, num2)).to.equal(undefined);
        });


        it('Test 2', () => {
            let num1 = true;
            let num2 = [];
            expect(testNumbers.sumNumbers(num1, num2)).to.equal(undefined);
        });

        it('Test 3', () => {
            let num1 = 0;
            let num2 = 0;
            expect(testNumbers.sumNumbers(num1, num2)).to.equal('0.00');
        });

        it('Test 4', () => {
            let num1 = 1;
            let num2 = -3;
            expect(testNumbers.sumNumbers(num1, num2)).to.equal('-2.00');
        });

        it('Test 5', () => {
            let num1 = 0.6;
            let num2 = 0.4;
            expect(testNumbers.sumNumbers(num1, num2)).to.equal('1.00');
        });

    });

    describe('numberChecker', () => {

        it('Test 1', () => {
            let input = Number('k');
            expect(() => testNumbers.numberChecker(input)).to.throw();
        });

        it('Test 2', () => {
            let input = undefined;
            expect(() => testNumbers.numberChecker(input)).to.throw();
        });

        it('Test 3', () => {
            let input = 2;
            expect(testNumbers.numberChecker(input)).to.equal('The number is even!');
        });

        it('Test 4', () => {
            let input = 0;
            expect(testNumbers.numberChecker(input)).to.equal('The number is even!');
        });

        it('Test 5', () => {
            let input = 4;
            expect(testNumbers.numberChecker(input)).to.equal('The number is even!');
        });

        it('Test 9', () => {
            let input = '-4';
            expect(testNumbers.numberChecker(input)).to.equal('The number is even!');
        });

        it('Test 6', () => {
            let input = 1;
            expect(testNumbers.numberChecker(input)).to.equal('The number is odd!');
        });

        it('Test 7', () => {
            let input = '3';
            expect(testNumbers.numberChecker(input)).to.equal('The number is odd!');
        });

        it('Test 8', () => {
            let input = 3;
            expect(testNumbers.numberChecker(input)).to.equal('The number is odd!');
        });

        it('Test 10', () => {
            let input = '-3';
            expect(testNumbers.numberChecker(input)).to.equal('The number is odd!');
        });
    });

    describe('averageSumArray', () => {

        it('Test 1', () => {
            let arr = [2, 0, 4, 0, 4, 20];
            expect(testNumbers.averageSumArray(arr)).to.equal(5);
        });

        it('Test 2', () => {
            let arr = [2.5, 0.5, 4.5, 0.5, 4.5, 20.5];
            expect(testNumbers.averageSumArray(arr)).to.equal(5.5);
        });

        it('Test 3', () => {
            let arr = [0, 0, 0, 0, 0];
            expect(testNumbers.averageSumArray(arr)).to.equal(0);
        });

        it('Test 4', () => {
            let arr = [-4.5, -20.5];
            expect(testNumbers.averageSumArray(arr)).to.equal(-12.5);
        });

        it('Test 5', () => {
            let arr = [-2.5];
            expect(testNumbers.averageSumArray(arr)).to.equal(-2.5);
        });
    });
});