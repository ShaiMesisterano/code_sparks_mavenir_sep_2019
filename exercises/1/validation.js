String.prototype.replaceAll = function (search, replacement) {
    let target = this;
    return target.split(search).join(replacement);
};

function defineError(lengthIs16, isDigits, differentDigits, lastDigitIsEven, sumGreaterThat16) {
    if (!lengthIs16) {
        return "Number must be 16 digits"
    } else if (!isDigits) {
        return "all of them must be numbers"
    } else if (!differentDigits) {
        return "at least two different digits"
    } else if (!lastDigitIsEven) {
        return "The final digit must be even"
    } else if (!sumGreaterThat16) {
        return "The sum of all the digits must be greater than 16"
    }
}

function validateCreditCard(cardNumber) {
    let cardNumberNoDashes = cardNumber.replaceAll("-", "");

    let arrNumbers = Array.from(cardNumberNoDashes);
    const setNumbers = new Set(cardNumberNoDashes);

    let lengthIs16 = cardNumberNoDashes.length === 16;
    let isDigits = arrNumbers.every(it => isDigit(it));
    let differentDigits = setNumbers.size > 1;
    let lastDigitIsEven = parseInt(arrNumbers[arrNumbers.length - 1]) % 2 === 0;
    let sumGreaterThat16 = arrNumbers.reduce((a, b) => (parseInt(a) + parseInt(b))) > 16;

    let isValid = lengthIs16
        && isDigits
        && differentDigits
        && lastDigitIsEven
        && sumGreaterThat16;

    let error = defineError(lengthIs16, isDigits, differentDigits, lastDigitIsEven, sumGreaterThat16);

    return isValid ?
        {
            valid: true,
            number: cardNumber
        }
        :
        {
            valid: false,
            number: cardNumber,
            error: error
        }
}

console.log(validateCreditCard("a92332119c011112"));
console.log(validateCreditCard("4444444444444444"));
console.log(validateCreditCard("1111111111111110"));
console.log(validateCreditCard("6666666666666661"));
console.log();
console.log(validateCreditCard("9999-7777-8888-0000"));
console.log(validateCreditCard("6666-6666-6666-1666"));
console.log();
console.log(validateCreditCard("9999777788880000"));
console.log(validateCreditCard("6666666666661666"));

function isDigit(c) {
    return c >= '0' && c <= '9';
}

