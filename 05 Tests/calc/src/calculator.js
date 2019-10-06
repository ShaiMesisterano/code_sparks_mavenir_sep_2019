function isZero(a) {
    return a === 0;
}

module.exports = {
    sum: function (a,b) {
        return a + b;
    },
    multiply: function (a,b) {
        return a*b;
    },
    square: function (a) {
        const result = this.multiply(a,a);
        return result;
    },
    divide: function (a,b) {
        if (isZero(b)) throw new Error('Cannot divide by zero');
        return a/b;
    }
}
