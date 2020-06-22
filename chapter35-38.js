// 1. Write a function that displays current date & time in your browser.  
function date() {
var rightNow = new Date();
document.write(rightNow + "<br>" + "<br>");
}
// Invoke the function
date();

// 2. Write a function that takes first & last name and then it greets the user using his full name. 
function greet() {
   var fname =  prompt("Enter the first name: ");
   var lname =  prompt("Enter the last name: ");
   document.write("Hello " + fname + " " + lname + "<br>" + "<br>");
}
// Invoke the function
greet();


// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.  
function add() {
    var a,b;
    a = +prompt("Enter a 1st value");
    b = +prompt("Enter a 2nd value");
    var c = a + b;
    document.write("the sum of two numbers is " + c + "<br>" + "<br>");

}
add();


// 4. Calculator:  
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
// Return and show the desired result in your browser. 
function calculate() {
    var v1, v2, d;
    v1 = +prompt("Enter a 1st value");
    d = prompt("Enter a operator");
    v2 = +prompt("Enter a 2nd value");
    var result;
    if (d == "*"){
        result = v1 * v2;
    }
    else if (d == "/"){
        result = v1 / v2;
    }
    else if (d == "+"){
        result = v1 + v2;
    }
    else if (d == "-"){
        result = v1 - v2;
    }
    document.write("Result is " + result + "<br>" + "<br>")
}
calculate();



// 5. Write a function that squares its argument. 
function doMath(){
    var inputNum1 = +prompt("Enter the value");
    var c = (inputNum1 * inputNum1);
    document.write("Result is " + c + "<br>" + "<br>")
}
doMath();


// 6. Write a function that computes factorial of a number.  
function factorial(n) {
    var answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
var n = prompt("Enter a factnum");
answer = factorial(n)
document.write("The factorial of " + n + " is " + answer + "<br>" + "<br>");

// 7. Write a function that take start and end number as inputs & display counting in your browser. 





// 8. Write a nested function that computes hypotenuse of a right angle triangle.  
// Take base and perpendicular as inputs. 
// Outer function : calculateHypotenuse() 
// Inner function: calculateSquare() 
function calculateHypotenuse(){
    var base = +prompt("Enter the base");
    var perp = +prompt("Enter the perpendicular");
    var hypot = Math.sqrt(base*base + perp*perp);
    document.write("Result is " + hypot + "<br>" + "<br>");
}
calculateHypotenuse();

// 9. Write a function that calculates the area of a rectangle. 
//      A = width * height 
//     Pass width and height in following manner: 
// i.  Arguments as value 
// ii.  Arguments as variables 
var length = prompt("Enter a whole number for the length of your rectangle.");
var width = prompt("Enter a whole number for the width of your rectangle.");
function area(length, width) {
    return length * width;
}
function perimeter(length, width) {
    return 2 * (length + width);
}

document.write('The area of your rectangle is ' + area(length, width) +  "<br>");
document.write('The perimeter of your rectangle is ' + perimeter(length, width) + "<br>" + "<br>");

// 10.  Write a JavaScript function that checks whether a passed string is palindrome or not?   
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
function checkPalindrom(){ 
var hi = prompt("Enter a word");
var bye = hi.split("").reverse().join("");
if (hi == bye) {
    document.write('A palindrome is word' + "<br>" + "<br>");
}
else {
    document.write('Try again' + "<br>" + "<br>");
}
}
checkPalindrom();


// 11.  Write a JavaScript function that accepts a string as a parameter and 
// converts the first letter of each word of the string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  
// EXPECTED OUTPUT : 'The Quick Brown Fox' 
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    var nstr = "";
    for (var i = 0; i < splitStr.length; i++) {
        nstr += (splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1) + " ");
    }
    document.write(nstr + "<br>" + "<br>");
}
var strng = "the quick brown fox";
titleCase(strng);


// 12.  Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  
// EXAMPLE STRING : 'Web Development Tutorial'  
// EXPECTED OUTPUT : 'Development' 
var input = "Web Development Tutorial";

function longest(str) {
  var longestStart = 0;
  var longestEnd = 0;
  var current = 0;
  var currentLength = 0;
  while (current < str.length) {
    if (str.charAt(current) == ' ') {
      if (currentLength > (longestEnd - longestStart)) {
        longestStart = (current - currentLength);
        longestEnd = current;
      }
      currentLength = 0;
    } else {
      currentLength++;
    }
    current++;
  }
  return str.substring(longestStart, longestEnd);
}

document.write(longest(input) + "<br>" + "<br>");

// 13.  Write a JavaScript function that accepts two arguments, 
// a string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.  
// Sample arguments : 'JSResourceS.com', 'o'  

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('JSResourceS.com', 'o') + "<br>" + "<br>");




// 14.  The Geometrizer 
// Create 2 functions that calculate properties of a circle, using the definitions here. 
// Create a function called calcCircumference: 
// •  Pass the radius to the function. 
// •  Calculate the circumference based on the radius, and output "The circumference is NN". 
// Create a function called calcArea: 
// •  Pass the radius to the function. 
// •  Calculate the area based on the radius, and output "The area is NN". 
// Circumference of circle    =     2πr 
// Area of circle         =     πr 2 

function calcCircumfrence(radius) {
    var y = (Math.PI * radius) * 2;
  document.write("The circumfrence is " + y + "." + "<br>");
  }
  function calcArea(radius) {
    var x = (Math.PI * radius) * radius;
  document.write("The area is " + x + "." + "<br>" + "<br>");
  }
  
  calcCircumfrence(30);
  calcArea(10);
  



