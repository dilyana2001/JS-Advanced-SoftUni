const createCalculator = require('../07-add-subtract');
const { assert } = require('chai');

describe('07 Add subtract.', () => {
    it('Should be object typeof.', () => {
        let expectedResult = 'object'
        let actualResult = (typeof createCalculator())
        assert.equal(expectedResult, actualResult)
    });
    it('Should be function typeof.', () => {
        let expectedResult = 'function'
        let actualResult = (typeof createCalculator().add)
        assert.equal(expectedResult, actualResult)
    });
    it('Check add method in main function.', () => {
        let expectedResult = undefined
        let actualResult = (createCalculator().add())
        assert.equal(expectedResult, actualResult)
    });
    it('Check subtract method in main function.', () => {
        let expectedResult = undefined
        let actualResult = (createCalculator().subtract())
        assert.equal(expectedResult, actualResult)
    });
    it('Check get method in main function.', () => {
        let expectedResult = 0
        let actualResult = (createCalculator().get())
        assert.equal(expectedResult, actualResult)
    });
    it('Check parse numbers and method works.', () => {
        let calc = createCalculator()
        calc.add('4')
        calc.subtract('2')
        let expectedResult = 2
        let actualResult = (calc.get())
        assert.equal(expectedResult, actualResult)
    });
    it('Should can`t be modify by outside.', () => {
        let expectedResult = undefined
        let actualResult = (createCalculator().value)
        assert.equal(expectedResult, actualResult)
    });
    it('Check parse numbers if works.', () => {
        let calc = createCalculator()
        calc.add('1')
        let expectedResult = 1
        let actualResult = (calc.get())
        assert.equal(expectedResult, actualResult)
    });
})