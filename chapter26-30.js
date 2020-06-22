// 1.  Write a program that takes a positive integer from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number    
var num = prompt("Enter the number ");
document.write("number: " + num + "<br>");
var roundoff = (Math.round(num));
document.write("round off value: " + roundoff + "<br>");
var floor =  (Math.floor(num));
document.write("floor value: " + floor + "<br>");
var ceil = (Math.ceil(num));
document.write("ceil value: " + ceil + "<br>" + "<br>");


// 2. Write a program that takes a negative floating point number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 
var num = prompt("Enter the number ");
document.write("number: " + num + "<br>");
var roundoff = (Math.round(num));
document.write("round off value: " + roundoff + "<br>");
var floor =  (Math.floor(num));
document.write("floor value: " + floor + "<br>");
var ceil = (Math.ceil(num));
document.write("ceil value: " + ceil + "<br>" + "<br>");

// 3. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 
var num = -4;
var absolute = Math.abs(num);
document.write("The absolute value of " + num + " is " + absolute + "<br>" + "<br>");

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: 
var die1 = Math.floor( Math.random() * 6 ) +1;
var die2 = Math.floor( Math.random() * 6 ) +1;
if(die1 === die2){
    document.write("random dice value: " + die1 + "<br>" + "<br>");
  }
  else{
    document.write("rancdom dice value: " + die2 + "<br>" + "<br>");
  }

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.
var prob1 = Math.floor(Math.random() * 2) +1;
var prob2 = Math.floor(Math.random() * 2) +1;
if(prob1 === prob2){
   document.write(prob1  + "<br>" );
   document.write('random coin value: Heads' + "<br>" + "<br>");
 }
 else{
   document.write(prob2  + "<br>" );
   document.write('random coin value: Tails' + "<br>" + "<br>");
 }


//  6. Write a program that shows a random number between 1  and 100 in your browser. 
var prob1 = Math.floor(Math.random() * 101);
document.write('random number between 1 and 100: ' + prob1 + "<br>" + "<br>");



// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 
// Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms 


// 8. Write a program that stores a random secret number from 1 to 10 in a variable. 
// Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 
var num = Math.ceil(Math.random() * 10);
var guess = prompt("Enter a number between 1 and 10 ")
if (guess != num) {
    alert("Try again!");
}
else {
    alert('Congratulations!\nThe number was ' + num);
}