const sum = require('../01.subSum');
const { assert } = require('chai');

describe('01. Test Sum', () => {
    it('If end index is out of bounds.', () => {
        //Arange
        let input = [10, 20, 30, 40, 50, 60];
        let start = 3;
        let end = 300;
        let expectedResult = 150;

        //Act
        let actualResult = sum(input, start, end);

        //Assert
        assert.equal(actualResult, expectedResult)
    });
    it('If start index is out of bounds.', () => {
        let input = [1.1, 2.2, 3.3, 4.4, 5.5];
        let start = -3;
        let end = 1;
        let expectedResult = 3.3;
        let actualResult = sum(input, start, end);
        assert.equal(actualResult, expectedResult)
    });
    it('If we have different elements in the input array.', () => {
        let input = [10, 'twenty', 30, 40];
        let start = 0;
        let end = 2;
        let expectedResult = 'NaN';
        let actualResult = sum(input, start, end);
        assert.equal(actualResult, expectedResult)
    });
    it('If we have empty input array.', () => {
        let input = [];
        let start = 1;
        let end = 2;
        let expectedResult = 0;
        let actualResult = sum(input, start, end);
        assert.equal(actualResult, expectedResult)
    });
    it('If we have different first argument.', () => {
        let input = 'text';
        let start = 0;
        let end = 2;
        let expectedResult = 'NaN';
        let actualResult = sum(input, start, end);
        assert.equal(actualResult, expectedResult)
    });
});