const cinema = require('./cinema.js');
const { expect } = require('chai');

describe('Cinema tests', () => {

    describe('showMovies', () => {

        it('Test 1', () => {
            let movieArr = [];
            expect(cinema.showMovies(movieArr)).to.equal(`There are currently no movies to show.`);
        });

        it('Test 2', () => {
            let movieArr = ['King Kong', 'The Tomorrow War', 'Joker'];
            expect(cinema.showMovies(movieArr)).to.equal('King Kong, The Tomorrow War, Joker');
        });

        it('Test 3', () => {
            let movieArr = ['The Tomorrow War'];
            expect(cinema.showMovies(movieArr)).to.equal('The Tomorrow War');
        });

        it('Test 4', () => {
            let movieArr = ['King Kong'];
            expect(cinema.showMovies(movieArr)).to.equal('King Kong');
        });

        it('Test 5', () => {
            let movieArr = ['Joker'];
            expect(cinema.showMovies(movieArr)).to.equal('Joker');
        });
    });

    describe('ticketPrice', () => {
        it('Test 1', () => {
            let projectionType = 'Premiere';
            expect(cinema.ticketPrice(projectionType)).to.equal(12);
        });

        it('Test 2', () => {
            let projectionType = 'Normal';
            expect(cinema.ticketPrice(projectionType)).to.equal(7.50);
        });

        it('Test 3', () => {
            let projectionType = 'Discount';
            expect(cinema.ticketPrice(projectionType)).to.equal(5.50);
        });

        it('Test 4', () => {
            let projectionType = 'Other';
            expect(() => cinema.ticketPrice(projectionType)).to.throw();
        });

        it('Test 5', () => {
            let projectionType = undefined;
            expect(() => cinema.ticketPrice(projectionType)).to.throw();
        });

        it('Test 6', () => {
            let projectionType = 0;
            expect(() => cinema.ticketPrice(projectionType)).to.throw();
        });

        it('Test 7', () => {
            let projectionType = null;
            expect(() => cinema.ticketPrice(projectionType)).to.throw();
        });
    });

    describe('swapSeatsInHall', () => {
        it('Test 1', () => {
            let firstPlace = 0;
            let secondPlace = 0;
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(`Unsuccessful change of seats in the hall.`);
        });

        it('Test 2', () => {
            let firstPlace = 1;
            let secondPlace = 1;
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(`Unsuccessful change of seats in the hall.`);
        });

        it('Test 3', () => {
            let firstPlace = 20;
            let secondPlace = 20;
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(`Unsuccessful change of seats in the hall.`);
        });


        it('Test 12', () => {
            let firstPlace = 1;
            let secondPlace = 20;
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(`Successful change of seats in the hall.`);
        });

        it('Test 4', () => {
            let firstPlace = 20;
            let secondPlace = 0;
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(`Unsuccessful change of seats in the hall.`);
        });

        it('Test 11', () => {
            let firstPlace = 0;
            let secondPlace = 20;
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(`Unsuccessful change of seats in the hall.`);
        });

        it('Test 5', () => {
            let firstPlace = 19;
            let secondPlace = 1;
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(`Successful change of seats in the hall.`);
        });

        it('Test 6', () => {
            let firstPlace = 18;
            let secondPlace = 2.5;
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(`Unsuccessful change of seats in the hall.`);
        });

        it('Test 7', () => {
            let firstPlace = 18.5;
            let secondPlace = 2.5;
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(`Unsuccessful change of seats in the hall.`);
        });

        it('Test 8', () => {
            let firstPlace = 13.4;
            let secondPlace = 5;
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(`Unsuccessful change of seats in the hall.`);
        });

        it('Test 9', () => {
            let firstPlace = -5;
            let secondPlace = 5;
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(`Unsuccessful change of seats in the hall.`);
        });

        it('Test 10', () => {
            let firstPlace = 7;
            let secondPlace = -7;
            expect(cinema.swapSeatsInHall(firstPlace, secondPlace)).to.equal(`Unsuccessful change of seats in the hall.`);
        });
    });
});