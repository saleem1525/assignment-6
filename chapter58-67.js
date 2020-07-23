// Getting element of id “main-content” and assigning them in a variable
var mainId = document.getElementById('main-content');

// // Displaying all child elements of “main-content” element.
var childElements = document.getElementById('dataId');
childElements.innerText = mainId.innerHTML;

// // Get all elements of class “render” and show their innerHTML in browser
var render = document.getElementsByClassName('render');
for (i = 0; i < render.length; i++) {
    childElements.innerHTML += '<br/>' + render[i].innerHTML;
}

// // Filling input value whose element id first-name , ”last-name” and “email” using javascript.
var fName = document.getElementById('first-name');
var lName = document.getElementById('last-name');
var email = document.getElementById('email');

fName.value = 'Saleem';
lName.value = 'Raza';
emailId.value = 'Saleem@yahoo.com';

// // What is node type of element having id “form-content” , “lastName” and its child node..
var formControl = document.getElementById('form-content');
childElements.innerHTML += '<br/>' + formControl.nodeType;

// // Getting First and last child of id “main-content”.
childElements.innerHTML += '<br/>' + mainId.firstElementChild;
childElements.innerHTML += '<br/>' + mainId.lastElementChild;

// // Getting next and previous siblings of id “lastName”.
childElements.innerHTML += '<br/>' + lName.previousElementSibling;
childElements.innerHTML += '<br/>' + lName.nextElementSibling;

// // Getting parent node and node type of element having id “email”
childElements.innerHTML += '<br/>' + emailId.parentNode;
childElements.innerHTML += '<br/>' + emailId.nodeType;