// Minimum

// function declaration
function minimum (num1, num2) {
    return Math.min(num1, num2);
}

minimum(10,100);

// function expression
let minimum = function (num1, num2) {
    return Math.min(num1, num2);
}
minimum(10, 100);

// arrow function
let minimum = (num1, num2) => Math.min(num1, num2);
minimum(10,100);

// Recursion

// recursive function - must use return as part of recursive statement
function isEven (number) {

    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else if (number < 0) { 
        number += 2;
        return isEven(number);
    } else {
        number -= 2;
        return isEven(number);
    }

}

isEven(-5);
isEven(-6);
isEven(5);
isEven(6);

// using Math.abs to convert any negative number to a positive
function isEven (number) {
    number = Math.abs(number);

    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        number -= 2;
        return isEven(number);
    }
}

isEven(-5);
isEven(-6);
isEven(5);
isEven(6);

// Bean Counting

// count letters
const countLetters = function (string, letter) {
    let stringCap = string.toUpperCase();
    let letterCap = letter.toUpperCase();
    let counter = 0;

    for (let i = 0; i < stringCap.length; i++) {
        if (stringCap[i] === letterCap) {
            counter += 1;
        }
    }

    return counter;

}

countLetters("baseball", "b");
