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

- JavaScript is able to increment the value of `counter` because of closure.
- When the function `incrementCounter` is returned after calling the function `counter`, a "backpack" is created where we can access the variable `counter`.
- When can do this because of lexical scoping or closure.
- Functions have the ability to "look out" beyond their local scope and store that information to its memory.

_Asynchronous JavaScript_

- JavaScript is:
  - Single threaded (one command runs at a time).
  - Synchronously executed (each line is run in order the code appears).
- So what if we have a task:
  - Accessing Twitter's server to get new tweets that takes a long time.
  - Code we want to run using those tweets.

_What if we try to delay a function directly using setTimeout?_

```javascript
function printHello() {
  console.log('Hello');
}

setTimeout(printHello, 1000);
console.log('Me first!');
```

In the console:

1. 'Me first!'
2. 'Hello'

```javascript
function printHello() {
  console.log('Hello');
}

function blockFor1Sec() {
  // blocks in the JavaScript thread for 1 sec
}

setTimeout(printHello, 0);

blockFor1Sec();
console.log('Me first!');
```

In the console:

1. 1001ms - 'Me first!'
2. 10002ms - 'Hello'

- Callback Queue = browser
- Call Stack = JavaScript global execution context
- In order for functions to be popped off the Callback Queue and onto the Call Stack, the global execution context has to be done.
- Call Stack must be empty.
- You could have 1000 console logs in the global execution context before anything is popped off the Callback Queue.
- The checking of the Call Stack against the Callback Queue is the Event Loop.

```javascript
function printHello() {
  console.log('Hello');
}

function printHelloAgain() {
  console.log('Hello Again');
}

function blockFor1Sec() {
  setTimeout(printHelloAgain, 1000);
  console.log('Block for 1 sec');
}

setTimeout(printHello, 1000);

blockFor1Sec();
console.log('Me First!');
```

In the console:

1. 'Block for 1 sec'
2. 'Me First!'
3. 'Hello'
4. 'Hello Again'

- Even if we call a second `setTimeout` within the scope of a function, it gets added to the Callback Queue.
- We can see the order of events since 'Hello' is printed before 'Hello Again'.

_What happens if we change the setTimeout duration?_

```javascript
function printHello() {
  console.log('Hello');
}

function printHelloAgain() {
  console.log('Hello Again');
}

function blockFor1Sec() {
  setTimeout(printHelloAgain, 0);
  console.log('Block for 1 sec');
}

setTimeout(printHello, 1000);

blockFor1Sec();
console.log('Me First!');
```

In the console:

1. 'Block for 1 sec'
2. 'Me First!'
3. 'Hello Again'
4. 'Hello'

- When we mess with the `setTimeout` duration, we change the order of events.
- 'Hello Again' is printed before 'Hello' even though the `setTimeout` with the callback `printHello` was invoked first.
- So what is happening in the Callback Queue?

_JavaScript is not enough - We need new pieces (some of which aren't JavaScript at all_

- Our core JavaScript engine has 3 main parts:
  - Thread of execution
  - Memory/variable environment
  - Call stack
- We need to add some new comments:
  - Web Browser APIs/Node background APIs
  - Promises
  - Event loop, Callback/Task queue and micro task queue

_What features does JavaScript use within the browser?_

Web Browser + JavaScript

- Developer tools
- Web sockets
- Network requests - `fetch` / `xhr`
- Rendering - HTML DOM - `document`
- Timer - `setTimeout`

_ES5 Web Browser APIs with callback functions_

Problems

- Our response data is only available in the callback function - Callback hell.
- Maybe it feels a little odd to think of passing a function into another function only for it to run much later.

Benefits

- Super explicit once you understand how it works under-the-hood.

_ES6 Solution (Promises)_

Using two-pronged 'facade' functions that both:

- Initiate background web browser work and
- Return a placeholder object (promise) immediately in JavaScript

```javascript
function display(data) {
  console.log(data);
}

const futureData = fetch(`https://twitter.com/will/tweets/1`);
futureData.then(display);

console.log('Me first!');
```
