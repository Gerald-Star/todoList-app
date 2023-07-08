

Declare variable todoArray to hold the todos
set the todoArray to an empty string

use the localStorage setItem() method to se the todos to a string with JSON.stringify()
JSON.stringify() id´f used because localStorage works with strings. This is how to send data to localStorage

Declare a variable 'storage' that contains all the information in localStorage
We will assign to 'storage' JSON.parse() method that converts strings from local storage
into data we can access with JavaScript

When receiving data from a web server, the data is always a string.
Parse the data with JSON.parse(), and the data becomes a JavaScript object