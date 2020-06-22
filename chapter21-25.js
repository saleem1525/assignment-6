// 1.  Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. 
// Greet the user using his full name. 
var fname = prompt("Enter first name: ");
var lname = prompt("Enter last name: ");
document.write("Welcome " + fname + " " + lname + "<br>" + "<br>");


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser 

var mobile = prompt("Enter mobile model: ");
var len = mobile.length;
document.write("My favorite phone is: " + mobile + "<br>");
document.write("Length of string: " + len + "<br>" + "<br>");


// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser  .  

var str = ("Pakistani");
var n = str.indexOf("n");
document.write("String: " + str + "<br>");
document.write("Index of 'n': " + n + "<br>" + "<br>");


// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser .  
var str = ("Hello World");
var n = str.lastIndexOf("l");
document.write("String: " + str + "<br>");
document.write("Last index of 'l': " + n + "<br>" + "<br>");


// 5. Write a program to find the character at 3 rd  index in the word “Pakistani” and display the result in your browser .  
var str = "Pakistani";
var res = str.charAt(3);
document.write("String: " + str + "<br>");
document.write("Character at index 3: " + res + "<br>" + "<br>");


// 6. Repeat Q1 using string concat() method. 
var fname = prompt("Enter first name: ");
var lname = prompt("Enter last name: ");
document.write("Welcome " + fname.concat(" ", lname) + "<br>" + "<br>");


// var hello = 'Hello, '
// console.log(hello.concat('saleem', '. Have a nice day.'))
// // Hello, saleem. Have a nice day.



// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 
var city = ("Hyderabad");
document.write("City: " + city + "<br>");
var newText = city.replace("Hyder", "Islam");
document.write("After replacement: " + newText + "<br>" + "<br>");



// 8.  Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
var message = ("Ali and Sami are best friends. They play cricket and football together."); 
document.write("Paragraph: " + message + "<br>");
var newText = message.replace(/and/g, "&");
document.write("After replacement: " + newText + "<br>" + "<br>");

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 
var str = ("472");
document.write("Value: " + str + "<br>");
document.write("Type: " + "string" + "<br>");
var num = parseInt(str);
document.write("Value: " + num + "<br>");
document.write("Type: " + "number" + "<br>" + "<br>");

// 10.  Write a program that takes user input. Convert and show the input in capital letters. 
var str = prompt("Enter your dryfruit name: ");
document.write("User input: " + str + "<br>");
var cityToCheck = str.toUpperCase();
document.write("Upper case: " + cityToCheck + "<br>" + "<br>");

// 11.  Write a program that takes user input. Convert and show the input in title case. 
var str = prompt("Enter program name: ");
document.write("User input: " + str + "<br>");
var fchar = str.slice(0,1);
fchar = fchar.toUpperCase();
var ochar = str.slice(1);
ochar = ochar.toLowerCase();
var cityToCheck = fchar + ochar;
document.write("Title case: " + cityToCheck + "<br>" + "<br>");


// 12.  Write a program that converts the variable num to string. 
// var num = 35.36 ; 
// Remove the dot to display “3536” display in your browser. 
var num = 35.36 ; 
document.write("Number: " + num + "<br>");
document.write("Result: " + num.toString()*100 + "<br>" + "<br>");   

// 13.  Write a program to take user input and store username in a variable. 
// If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ . 
//     Note: 
//     ASCII code of ! is 33 
//     ASCII code of , is 44 
//     ASCII code of . is 46 
//     ASCII code of @ is 64 

var str = prompt("Enter the username: ")
if (str.indexOf("!") >= 0 || str.indexOf(",") >= 0 || str.indexOf("@") >= 0 || str.indexOf(".") >= 0) {
    alert("Please enter a valid username");
    document.write(str + "<br>" + "<br>");
}
else {
    document.write(str + "<br>" + "<br>");
}


// 14.  You have an array 
// A = ["cake", "apple pie", "cookie", "chips", "patties"] 
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. 
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example: 
var A = ["cake","apple pie","cookie","chips","patties"];
var search=prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'm");
search = search.toLowerCase();
var size=A.length;
var index = A.indexOf(search);
if (index > -1) {
    document.write(search+" is available at index "+(index+1)+" of our bakery" + "<br>" + "<br>");
    check=true;
}
else {
    document.write("We are sorry "+search  +" is not available in our bakery" + "<br>" + "<br>");
}



// 15.  Write a program to take password as an input from user. The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long 
// If the password does not meet above requirements, prompt the user to enter a valid password. 
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 


// 16.  Write a program to convert the following string to an array using string split method. 
// var university = “University of Karachi”; 
// Display the elements of array in your browser. 
var university = ("University of Karachi"); 
var ar = university.split(''); // empty string separator
document.write( ar + "<br>" + "<br>"); // [ "a", "b", "c", "d", "e", "f", "g" ]


// 17.  Write a program to display the last character of a user input.

var str = ("Pakistan"); 
document.write("User input: " + str + "<br>")
var res = str.charAt(str.length-1); 
document.write("Last character of input: " + res + "<br>" + "<br>")
              
// 18.  You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string. 
// var str = "The quick brown fox jumps over the lazy dog";
// document.write("Text: " + str + "<br>");
// str = str.toLowerCase();
