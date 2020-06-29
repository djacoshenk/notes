# JavaScript and The DOM

## Responding to User Interaction

__What is a function declaration?__

```javascript
function say (something) {
    console.log(something);
}
say(something);
```

* A function declaration consists of a function parameter `(something)` and statement `console.log(something)` that defines the function.
* A function is not required to be named. Unnamed functions are called anonymous functions.
* When invoking or calling a function, the function takes in an argument, which is then passed into the function statement.
* Functions are called "first-class citizens" in JavaScript because they can be stored in variables or passed into functions like any other datatype.

__Events in JavaScript__

```javascript
document.addEventListener('click', copyOnClick);
```

* The `addEventListener` method sets up a function that will be called whenever the specified event is delivered to the event target.
* The event target object may be an element in a document, the document itself, a window, or any other objects that supports events.
* In the example above, the function "listens" for the event `click`, which triggers the event handler `copyOnClick`.
* An event handler is a type of callback function that's triggered as a result of an event.

```javascript
eventTarget.addEventListener('click', (event) => {
    event.target.textContent = event.target.textContent.toUpperCase();
});
```

* Callback functions can be expressed within statements and invoked by the event.
* In the above example, the callback function takes in `event` as a parameter.

## Traversing the DOM

* Store an element's parent node by using `node.parentNode`.
* The parentNode is considered an attribute of the node and can be accessed in this.
* Ul is a parent node of li items, so it can be accessed and set to a variable.

_Methods to access a node's children_

* `node.appendChild(child)` & `node.removeChild(child)` can be used between the parent node `node` and child node `(child)`.
* `appendChild` adds a node to the end of the list of children of a specified parent node.
* `removeChild` method removes a child node from the DOM and returns the removed node.
* `ParentNode.firstElementChild` & `ParentNode.lastElementChild` can be used to acccess a parent nodes first and last children.
* You can access the list elements of a parent ul/ol by using `ParentNode.firstElementChild` & `ParentNode.lastElementChild`.
* `ParentNode.children` will return an HTML collection of the children nodes.

_Methods to access a node's direct sibiling_

* `nextElementSibling` & `previousElementSibling` can be used to access the next and previous siblings of the element.
* `previousSibling` gets you the previous document node.
* `previousElementSibling` is preferred because it always returns an element from the DOM.

