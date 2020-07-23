// The Sum of a Range

// range function declaration
function range (start, end) {
    let arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }

    return arr;

}

range(1, 10);

// range arrow function
const range = (start, end) => {
    let arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }

    return arr;

}

range(1, 10);

// sum function
function sum (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;    
}

// step function
function range (start, end, step) {
    let stepValue = Math.abs(step);
    let arr = [];
    if (start < end) {
        for (let i = start; i <= end; i += stepValue) {
            arr.push(i);
        }
    } else {
        for (let i = start; i >= end; i -= stepValue) {
            arr.push(i);
        }
    }    
    return arr;
}

range(5, 2, -1);
