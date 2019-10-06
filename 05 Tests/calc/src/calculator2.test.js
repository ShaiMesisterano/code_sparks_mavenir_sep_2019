const calc = require('./calculator');

describe('Given a calculator', function () {
    describe('When calculating a sum of two numbers', function () {
        let sum;

        beforeAll(function () {
            sum = calc.sum(1,2);
        });

        afterAll(function () {
            sum = null;
        });

        it('Then it should return a number', function () {
            expect(typeof sum).toBe('number');
        });

        it('Then it should return 3', function () {
            expect(sum).toBe(3);
        })
    })
})