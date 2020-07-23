// example array using to determine typeof (OBJECT)
let ages = [21, 22, 23, 19, 17, 33];

console.log(ages[1]);
console.log([10, ...ages, 21]); // simple way to concatenate

// example function used to determine typeof (FUNCTION)
function square(x) {
  return x * x;
}

// exmple object used to determine typeof (OBJECT)
const obj = {
  name: 'Danny',
  age: 27,
};

// example class used to determine typeof (FUNCTION)
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

console.log(typeof ages); // object
console.log(typeof square); // function
console.log(typeof obj); // object
console.log(typeof Rectangle); // function
console.log(typeof arr); // undefined

const big = BigInt('19039028023');
console.log(big);
console.log(typeof big); // bigint

let v = ''; // empty string
console.log(typeof v); // string

console.log(typeof ('name' / 2)); // NaN --> number
console.log(typeof NaN); // number

// using JS rest parameter
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0); // rest parameter is received as an array of values - the arguments represent the values of the array
};

console.log(sum(1, 2, 3));

// using JS spread operator
const arr1 = [6, 89, 3, 45];
const arrMax = Math.max(...arr1); // Math.max(6, 89, 3, 45) - using the spread operator unpacks the contents of an array into a comma separated list

console.log(arrMax);
