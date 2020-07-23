// Higher Order Functions

/*  .forEach
*   use forEach to iterate over an array - properties can be accessed with dot notation
*   used to perform a function over each array element
*/

/*  .filter
*   const canDrink = ages.filter(age => age >= 21); comparison operator will return a Boolean
*   in the filter method - we declare 'age' as an iterator - this can be any string
*   a callback function is passed into the filter method as an argument
*   canDrink becomes an array made up of the values which are greater than 21
*/

/*  .map
*   apply mathematical operators across the entire array - sqrt each number in an array
*   access object properties across entire array
*/

/*  .sort
*   const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
*   use of a ternary operator - takes in three values
*   value on the left of the colon (:) returns if true and the right if false
*   const sortAges = ages.sort((a, b) => a - b); ascending order
*   const sortAges = ages.sort((a, b) => b - a); descending order
*/

/*  .reduce
*   const sumAges = ages.reduce((total, age) => total + age, 0);
*   the above sums up all the numbers within an array
*   results in a single output
*   requires more than one argument
*/

/*  findIndex() 
*   accepts a callback function
*   findIndex() returns the index in which the first elements exists that passes the function
*   -1 is returned if no value passes the function
*/

/*  indexOf() 
*   does not accept a function - it accepts a value (number of string)
*   the value returned is the first index in which the value exists
*   -1 is returned if the value does not exist in the array at all
*/

// Flattening
let arrays = [[1, 2, 3,], [4, 5], [6]];

let flatten = arrays.reduce((a, b) => a.concat(b));
flatten;

// Your Own Loop


