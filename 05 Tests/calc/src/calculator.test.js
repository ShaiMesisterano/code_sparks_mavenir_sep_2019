const calc = require('./calculator');

test('1+2=3', function () {
    expect(calc.sum(1,2)).toBe(3);
});

test('2*3=6', function () {
    expect(calc.multiply(2,3)).toBe(6);
    expect(calc.multiply(2,3)).not.toBe(12);
});

describe('divide', function () {
    const originalIsZero = calc.isZero;
    beforeAll(function() {
        calc.isZero = function () {
            return false;
        };
    });
    test('3/3=1', function () {
        expect(calc.divide(3,3)).toBe(1);
    });
    test('9/3=3', function () {
        expect(calc.divide(9,3)).toBe(3);
    });
    test('divide by zero', function () {
        calc.isZero = function () {
            return true;
        }
        expect( () => calc.divide(9,0).toThrow() );
    });
    afterAll(function () {
        calc.isZero = originalIsZero;
    })
})