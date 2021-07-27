const isSymmetric = require('../05-symetry');
const { assert } = require('chai');

describe('05. isSymmetric Test', () => {
    it('If is symetric.', () => {
        let input = [1, 2, 3, 2, 1];
        let expectedResult = true;
        let actualResult = isSymmetric(input);
        assert.equal(actualResult, expectedResult)
    });
    it('If is empty.', () => {
        let input = [];
        let expectedResult = true;
        let actualResult = isSymmetric(input);
        assert.equal(actualResult, expectedResult)
    });
    it('If is not symetrric.', () => {
        let input = [1, 2, 3, 2, 3];
        let expectedResult = false;
        let actualResult = isSymmetric(input);
        assert.equal(actualResult, expectedResult)
    });
    it('If is with one element.', () => {
        let input = [1];
        let expectedResult = true;
        let actualResult = isSymmetric(input);
        assert.equal(actualResult, expectedResult)

    });
    it('If is with equal elements from different type.', () => {
        let input = ['1', 1];
        let expectedResult = false;
        let actualResult = isSymmetric(input);
        assert.equal(actualResult, expectedResult)
    });
    it('If is different type.', () => {
        let input = '1';
        let expectedResult = false;
        let actualResult = isSymmetric(input);
        assert.equal(actualResult, expectedResult)

    })
})