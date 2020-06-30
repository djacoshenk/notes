# Array Iteration Methods

## Array.prototype.forEach()

* The `.forEach()` method calls a callback function once for each element of the array.
* This format is easier to read and understand in comparison to using a `for` loop.
* Unlike a `for` loop, the `.forEach()` method won't loop an infinite number of times and is limited to the number of elements in the array.  
* The value returned is always `undefined` and is not chainable like `.map()` and `.reduce()`.

_.forEach() and .push() methods to create a new array_

```javascript
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
let sNames = [];

// passes over each element in the array pushes the element to the new array
names.forEach(name => {
  if (name.includes('S')) {
    sNames.push(name);      
  }
});

// logs a new array comprised of the elements which passed
console.log(sNames);
```

_.forEach() method to sum up values_

```javascript
const prices = [6.75, 3.10, 4.00, 8.12];
let total = 0;

// adds each element to the total price
prices.forEach(price => total += price);

// logs a value
console.log(total);
```

## Array.prototype.filter()

* A callback function is passed into the `.filter()` method as an argument.
* An iterator is declared, which represents an element within the array.
* The result is a new array comprised of all the elements that pass the provided function.

_.filter() method to determine names that begin with S_

```javascript
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

// a new array is created an assigned to the variable
// all elements that pass are pushed to the variable
const sNames = names.filter(name => name.includes('S'));

// logs an array
console.log(sNames);
```

_.filter() method to determine which values are even_

```javascript
const ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// an array is created and made up of all the even numbers
const even = ten.filter(number => number % 2 === 0);

// logs an array
console.log(even);
```

## Array.prototype.map()

* The `.map()` method applies mathematical operators on each element of the array.
* An array is returned populated with the results.

_.map() method to multiply each value by 2_

```javascript
const a = [1, 4, 9, 16];

// a new array is created and assigned to the variable
// the function is applied to each element 
const b = a.map(a => a * 2);

// logs an array
console.log(b);
```

_.map() method to display user ages from nested object_

```javascript
const user = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42}
]

// nested objects in the array are accessed using dot notation
const ageUser = user.map(user => user.age);

// logs an array of the user ages
console.log(ageUser);
```

## Array.prototype.reduce()

* The `.reduce()` method requires at least two parameters.
* An accumulator `(acc)` and current value `(curr)` are most commonly used as parameters.
* The result is a single output value rather than an array.  

_.reduce() method to sum up the values in an array_

```javascript
const prices = [6.75, 3.10, 4.00, 8.12];
let total = prices.reduce((a, b) => (a + b));

console.log(total);
```

_.reduce() method to flatten an array_

```javascript
const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
]

// creates a single array by concatenating each array element together
// this can also be easily achieved by usings the .flat() method
const flatMovies = movies.reduce((a, b) => a.concat(b));

console.log(flatMovies);
```

## Array.prototype.findIndex()

* Accepts a callback function.
* The `.findIndex()` method returns the index in which the first elements exists that passes the function
* If no value passes the function, -1 is returned.

## Array.prototype.indexOf()

* Does not accept a function.
* The `.indexOf()` method accepts a value, such as a number or string.
* The value returned is the first index in which the value exists.
* If the value does not exist in the array, -1 is returned.

## Array Method Chaining

* Array methods can be chained together to manipulate an array.
* The order of operation is from left to right.

_.reduce() and .map() methods to count the names that begin with G_

```javascript
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

// the array consists of 1s and 0s, in which 1s represent passed values
let gNames = names.map(name => name.includes('G') ? 1 : 0);

// the .reduce() method sums up the elements of the new array
let gTotal = gNames.reduce((a, b) => a + b);

// logs a value rather than an array
console.log(gTotal);
```

_.map() and .filter() methods used to create an array of objects_

```javascript
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

// the .filter() method is first applied to create an array of only names that begin with G
// the .map() method is then applied to create an array of objects
const users = names.filter(name => name.includes('G')).map(name => ({name: name}));

// logs an array
console.log(users);
```