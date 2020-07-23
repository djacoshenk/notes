# JavaScript The Hard Parts V2

_When JavaScript code runs_

- Goes through the code lin-by-line and runs/'executes' each line - known as the thread of execution.
- Saves 'data' like strings and arrays so we can use that data later - in its memory. We can even save code ('functions').

```javascript
const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
```

_Memory_

- num: 3
- multiplyBy2: function
- output: multiplyBy2(num)
- output is initialized - at this point it does not have a value - an execution context is created

_Function_

- Code we save ('define') functions & can use (call/invoke/execute/run) later with the function's name & ()
- Created to run the code of a function - has 2 parts (we've already seen them!)
  - Thread of execution
  - Memory

_Call stack_

- JavaScript keeps track of what function is currently running (where's the thread of execution)
- Run a function - add to call stack
- Finish running the function - JS removes it from the call stack
- Whatever is top of the call stack - that's the function we're currently running

_Generalizing functions_

- 'Parameters' (placeholders) mean we don't need to decide what data to run our functionality on until we run the function
  - Then provide an actual value ('argument') when we run the function
- Higher order functions follow this same principle
  - We may not want to decide exactly what some of our funcitonality is until we run our function

```javascript
function copyArrayAndDivideBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndDivideBy2(myArray);
```

1. Define the function `copyArrayAndDivideBy2`
2. Define the constant `myArray` and assigning it an array [1,2,3]
3. Define the constant `result` and call the function copyArrayAndDivideBy2
4. Pass in the argument `myArray = [1,2,3]`
5. Define the parameter array and pass in the argument [1,2,3]
6. Define the constant `output` and assign it an empty array []
7. Run for loop
8. Return the value of `output` and store it in the global memory as the value for constant `result`

- DRY (Don't Repeat Yourself)
- We can pass in functionality as a parameter

```javascript
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
```

_How was this possible?_

- Functions in JavaScript = first class objects
- They can co-exist with and can be treated like any other JavaScript obect

1. Assigned to variables and properties of other objects
2. Passed as arguments into functions
3. Returned as values from functions

_Which is our Higher Order Function?_

- The outer function that takes in a function is our higher-order function

_Which is our Callback Function?_

- The function we insert is our callback function

_Higher-order functions_

- Takes in a function or passes out a function
- Just a term to describe these functions - any function that does it we call that - but there's nothing different about them inherently

_Anonymous and arrow functions_

- Imporove immediate legibility of the code
- But at least for our purposes here they are 'syntactic sugar'
- Understanding how they're working under-the-hood is vital to avoid confusion

_Closure_

- Closure is the most esoteric of JavaScript concepts
- Enables powerful pro-level functions like 'once' and 'memoize'
- Many JavaScript design patterns including the module pattern use closure
- Build iterators, handle partial application and maintain state in an asynchronous world

_Functions with memories_

- When our functions get called, we create a live store of data (local memory/vriable environment/state) for that function's execution context
- When the function fininshes executing, its local memory is deleted (except the returned value)
- But what if our functions could hold onto live data between executions?
- This would let our function definitions have an associated cache/persistent
- But it all starts with us returning a function from another function

_Functions can be returned from other functions in JavaScript_

```javascript
function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3);
```

1. Declare the function `createFunction`
2. Declare the constant `generatedFunc`
3. The value of `generatedFunc` is uninitialized
4. We call the function `createFunction` and create an execution context
5. We declare the function `multiplyBy2`
6. We return the function `multiplyBy2` and store it as a reference to the constant `generatedFunc`

_Calling a function in the same function call as it was defined_

```javascript
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  incrementCounter();
}

outer();
```

```javascript
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
```
