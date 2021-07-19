const sum = require('../04-sum-of-numbers');
const { assert } = require('chai');


describe('04. Test Sum', () => {
    it('If the elements are of type numbers.', () => {
        let arr = [10, 20, 30, 40, 50, 60];
        let expectedResult = 210;
        let actualResult = sum(arr);
        assert.equal(actualResult, expectedResult)
    });
    it('If some elements is not numbers.', () => {
        let arr = [10, 20, 30, 40, 50, '60'];
        let expectedResult = 210;
        let actualResult = sum(arr);
        assert.equal(actualResult, expectedResult)
    });
    it('If array is empty.', () => {
        let arr = [];
        let expectedResult = 0;
        let actualResult = sum(arr);
        assert.equal(actualResult, expectedResult)
    });
    it('If array is full of zeros.', () => {
        let arr = [0, 0, 0];
        let expectedResult = 0;
        let actualResult = sum(arr);
        assert.equal(actualResult, expectedResult)
    });
    it('If we receive different type of input.', () => {
        let arr = '02';
        let expectedResult = 2;
        let actualResult = sum(arr);
        assert.equal(actualResult, expectedResult)
    });
})