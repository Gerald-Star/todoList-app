// step 1 - create variables 'form', 'todoList', 'button', 'input'
// to target the form, unordered list, button and input

var form = document.querySelector("form");
var todoList = document.querySelector("ul");
var button = document.querySelector("button");
var input = document.getElementById("user-todo");

// STEP 1
// Declare variable todoArray to hold the todos list
// set the todoArray to an empty string

//var todosArray = []; we remove this to use ternary operator to set the condition

var todosArray = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

// this is needed because in our localStorage an array is need to represent the values of todo values
// Next is to use the setItem methods of localStorage to set the todoArrays

//STEP 2
// for this to happen in the localStorage we use the JSON.stringify method to access the Data
// This is because localStorage works with strings
// we sent data to localStorage

localStorage.setItem("todos", JSON.stringify(todosArray));
//to have access to the todos key will enable us to do anything on our browser or close the browser

//STEP 3
// to get data from the localStorage, we use the JASON.parse() method to turn the data in JS object.

//Declare a var 'storage ' that contains all the information in localStorage
//Assign to 'storage' JASON.parse() method that converts strings from local storage into data we can access with JavaScript
//When receiving data from a webserver the data is always a string
//Parse the data with JASON.parer(), and data becomes a Javascript object,
//while passing the JASON.parse(), use the getItem method to get the user key of the localStorage and pass the todos

var storage = JSON.parse(localStorage.getItem("todos"));

//to pash the value and push onto 'todosArray' the input.value' using the push method array
todosArray.push(input.value);

// step 3- attach an event listener to the 'form' variable with 'addEventListener'
// to capture the user input on the 'submit event.
// Make sure to run ' preventDefault()' on the event when the form is submitted.
// Call a 'todoMaker' function which we will create in step three and pass to it.
form.addEventListener("submit", function (e) {
  e.preventDefault();
  todoMaker(input.value);
  input.value = "";
});
//  the 'input' variable and target the value the user has provide with 'input.value'
var todoMaker = function (text) {
  var todo = document.createElement("li");
  todo.textContent = text;
  todoList.appendChild(todo);
};

//Loop through localStorage when a user opens a page and run the todoMaker function
for (var i = 0; i < storage.length; i++ ) {
  todoMaker(storage[i]);
}
// step 3 - create a todoMaker function that create 'li' elements with the text user provides
// removeChild() DOM method to removed that 'li' using the firstChild property
button.addEvenListener("click", function () {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
});
