# AJAX Basics

## AJAX Concepts

__What is AJAX?__

* AJAX means Asynchronous JavaScript & XML.
* AJAX lets you update the webpage without refreshing by requesting data from a web server.
* An example of this is Twitter's feed which loads new tweets to view when scrolling to the bottom of the page, but the page is not refreshed.
* Asynchronous requests mean that the browser can continue working on other tasks until the response returns from the server.
* This is far different from synchronous programming in which another task cannot be started until the current one is finished. This slows down web browsers.

_Web Browser makes a request from a Web Server_

```
Web Browser (Request) -----> Web Server
```

_Web Server sends a response to the Web Browser_

```
Web Server (Reponse) -----> Web Browser
```

__How Does AJAX Work?__

1. Create an XMLHttpRequest object
2. Create a callback function - this is invoked when the server responds with new data
3. Open a request
4. Send the request - send off the request to the web server

* AJAX requests only work through a web server, which can be achieved by running a local server or uploading to a web server.
* Web servers usually respond to AJAX requests with a simple text response - "form subbmitted!", "error!".
* Two common data interchange formats are XML and JSON. JSON has become the most popular way to exchange data with AJAX.

```javascript
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () { // create a call back function
    if (xhr.readyState === 4) {
        document.getElementById('ajax').innerHTML
    }
}
xhr.open('GET', 'sidebar.html'); // how to open a request
xhr.send(); // how to send a request
```

__Get vs. Post__

* The Get method is a simple way to get a resource from a web server.
* The Post method is dynamic and is used for data that will be saved like an email address, upvote on a Reddit post, or latest Tweets.
* The Post method sends data separate from the URL, which makes the information response more secure.
* Use Get if you're requesting more information & use Post if you're sending secure data like passwords and emails.

## Programming AJAX

* When a web browser reaches a new stage, the ready state is changed.
* The readyState represents a number between 0 - 4. A readyState of 4 means that the web browser has received everything from the web server.
* A status property is a number sent from the server - a number of 200 is OK and 404 is bad.
* You can use status text to display a message to the webpage. For example, if the status property is 404 you could add a message that displays "404 not found".
* Check the ready state status property using xhr.status === 200 || xhr.status === 404
* Display the text response using xhr.textResponse and show on webpage using innnerHTML.

_Example JSON Format_

```
{
    "name": "Jim",
    "in_office": false
}
```

* JSON can be formatted with an array or object. Format requires that keys or properties be double quoted - single quotes won't work.
* JSON.parse will parse the JSON string as valid JS.