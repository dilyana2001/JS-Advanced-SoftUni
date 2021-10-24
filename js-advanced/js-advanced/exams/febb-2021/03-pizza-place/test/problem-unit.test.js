const { expect } = require('chai');
const library = require('./problem-unit.js');

describe('library tests', () => {

    describe('calcPriceOfBook', () => {

        it('Test 1', () => {
            let nameOfBook = 0;
            let year = 'string';
            expect(() => library.calcPriceOfBook(nameOfBook, year)).to.throw();
        });

        it('Test 1', () => {
            let nameOfBook = undefined;
            let year = 'string';
            expect(() => library.calcPriceOfBook(nameOfBook, year)).to.throw();
        });

        it('Test 1', () => {
            let nameOfBook = null;
            let year = 'string';
            expect(() => library.calcPriceOfBook(nameOfBook, year)).to.throw();
        });


        it('Test 1', () => {
            let nameOfBook = undefined;
            let year = null;
            expect(() => library.calcPriceOfBook(nameOfBook, year)).to.throw();
        });


        it('Test 1', () => {
            let nameOfBook = 0;
            let year = undefined;
            expect(() => library.calcPriceOfBook(nameOfBook, year)).to.throw();
        });


        it('Test 1', () => {
            let nameOfBook = [];
            let year = undefined;
            expect(() => library.calcPriceOfBook(nameOfBook, year)).to.throw();
        });


        it('Test 1', () => {
            let nameOfBook = 0;
            let year = [];
            expect(() => library.calcPriceOfBook(nameOfBook, year)).to.throw();
        });

        it('Test 1', () => {
            let nameOfBook = false;
            let year = [];
            expect(() => library.calcPriceOfBook(nameOfBook, year)).to.throw();
        });

        it('Test 1', () => {
            let nameOfBook = 'Harry Poter';
            let year = 1980;
            expect(library.calcPriceOfBook(nameOfBook, year)).to.equal('Price of Harry Poter is 10.00');
        });

        it('Test 1', () => {
            let nameOfBook = 'Harry Poter 1';
            let year = 0;
            expect(library.calcPriceOfBook(nameOfBook, year)).to.equal('Price of Harry Poter 1 is 10.00');
        });

        it('Test 1', () => {
            let nameOfBook = 'Bible';
            let year = 888;
            expect(library.calcPriceOfBook(nameOfBook, year)).to.equal('Price of Bible is 10.00');
        });

        it('Test 1', () => {
            let nameOfBook = 'Modern women';
            let year = 2020;
            expect(library.calcPriceOfBook(nameOfBook, year)).to.equal('Price of Modern women is 20.00');
        });

        it('Test 1', () => {
            let nameOfBook = 'Nightmares';
            let year = 1981;
            expect(library.calcPriceOfBook(nameOfBook, year)).to.equal('Price of Nightmares is 20.00');
        });

        it('Test 1', () => {
            let nameOfBook = 'Solid';
            let year = 19.19;
            expect(() => library.calcPriceOfBook(nameOfBook, year)).to.throw();
        });

        it('Test 1', () => {
            let nameOfBook = 'Solid';
            let year = 190.190;
            expect(() => library.calcPriceOfBook(nameOfBook, year)).to.throw();
        });
    });

    describe('findBook', () => {
        it('Test 1', () => {
            let booksArr = [];
            let desiredBook = 'Sicret circle';
            expect(() => library.calcPriceOfBook(booksArr, desiredBook)).to.throw();
            // expect(library.findBook(booksArr, desiredBook)).to.equal(['heated seats', 'sliding roof', 'sport rims', 'navigation']);
        });

        it('Test 1', () => {
            let booksArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let desiredBook = 'Sicret circle';
            // expect(() => library.calcPriceOfBook(booksArr, desiredBook)).to.throw();
            expect(library.findBook(booksArr, desiredBook)).to.equal('The book you are looking for is not here!');
        });

        it('Test 1', () => {
            let booksArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let desiredBook = '';
            // expect(() => library.calcPriceOfBook(booksArr, desiredBook)).to.throw();
            expect(library.findBook(booksArr, desiredBook)).to.equal('The book you are looking for is not here!');
        });


        it('Test 1', () => {
            let booksArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let desiredBook = 'sliding roof';
            // expect(() => library.calcPriceOfBook(booksArr, desiredBook)).to.throw();
            expect(library.findBook(booksArr, desiredBook)).to.equal('We found the book you want.');
        });

        it('Test 1', () => {
            let booksArr = ['heated seats'];
            let desiredBook = 'heated seats';
            // expect(() => library.calcPriceOfBook(booksArr, desiredBook)).to.throw();
            expect(library.findBook(booksArr, desiredBook)).to.equal('We found the book you want.');
        });

        it('Test 1', () => {
            let booksArr = ['heated seats'];
            let desiredBook = 'Sicret circle';
            // expect(() => library.calcPriceOfBook(booksArr, desiredBook)).to.throw();
            expect(library.findBook(booksArr, desiredBook)).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks', () => {
        it('Test 1', () => {
            let countBooks = 4.4;
            expect(() => library.arrangeTheBooks(countBooks)).to.throw();
            // expect(library.arrangeTheBooks(countBooks)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('Test 1', () => {
            let countBooks = -1;
            expect(() => library.arrangeTheBooks(countBooks)).to.throw();
            // expect(library.arrangeTheBooks(countBooks)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('Test 1', () => {
            let countBooks = -6.5;
            expect(() => library.arrangeTheBooks(countBooks)).to.throw();
            // expect(library.arrangeTheBooks(countBooks)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('Test 1', () => {
            let countBooks = -65;
            expect(() => library.arrangeTheBooks(countBooks)).to.throw();
            // expect(library.arrangeTheBooks(countBooks)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('Test 1', () => {
            let countBooks = 39;
            // expect(() => library.arrangeTheBooks(countBooks)).to.throw();
            expect(library.arrangeTheBooks(countBooks)).to.equal(`Great job, the books are arranged.`);
        });

        it('Test 1', () => {
            let countBooks = 1;
            // expect(() => library.arrangeTheBooks(countBooks)).to.throw();
            expect(library.arrangeTheBooks(countBooks)).to.equal(`Great job, the books are arranged.`);
        });

        it('Test 1', () => {
            let countBooks = 40;
            // expect(() => library.arrangeTheBooks(countBooks)).to.throw();
            expect(library.arrangeTheBooks(countBooks)).to.equal(`Great job, the books are arranged.`);
        });

        it('Test 1', () => {
            let countBooks = 41;
            // expect(() => library.arrangeTheBooks(countBooks)).to.throw();
            expect(library.arrangeTheBooks(countBooks)).to.equal(`Insufficient space, more shelves need to be purchased.`);
        });

        it('Test 1', () => {
            let countBooks = 1200;
            // expect(() => library.arrangeTheBooks(countBooks)).to.throw();
            expect(library.arrangeTheBooks(countBooks)).to.equal(`Insufficient space, more shelves need to be purchased.`);
        });

        it('Test 1', () => {
            let countBooks = 45;
            // expect(() => library.arrangeTheBooks(countBooks)).to.throw();
            expect(library.arrangeTheBooks(countBooks)).to.equal(`Insufficient space, more shelves need to be purchased.`);
        });
    });
});