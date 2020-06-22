// 1. Write a program that displays current date and time in your browser. 
var rightNow = new Date();
document.write(rightNow + "<br>" + "<br>");

// 2. Write a program that alerts the current month in words. For example December. 
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var now       = new Date();
var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
document.write("Current month: " + thisMonth + "<br>" + "<br>");


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 
var days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
var date = new Date();
var day = date.getDay();
document.write('Today is ' + days[day] + "<br>" + "<br>");


// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 
var today = new Date();
if(today.getDay() == 6 || today.getDay() == 0) {
document.write("It's Fun day" + "<br>" + "<br>");
}


// 5. Write a program that shows the message “First fifteen days of the month” 
// if the date is less than 16 th  of the month else shows “Last days of the month”. 
var today = new Date();
if(today.getDate() <= 15)  {
document.write("First fifteen days of the month" + "<br>" + "<br>");
}
else{
document.write("Last days of the month" + "<br>" + "<br>");
}



// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like to represent the Date object. 
var rightNow = new Date();
document.write("Current date: " + rightNow + "<br>");
// var d = new Date('January 1, 1970'); 
// var n = d.getMilliseconds();
var d = new Date();
// day of the week from above Date Object is 
// being extracted using getDay() 
var n = d.getTime();
// Printing day of the week 
document.write("Elapsed milliseconds since January 1, 1970: " + n + "<br>");
var minutes = 1000 * 60;
var secondsSinceEpoch = (Date.now() / minutes)
document.write("Elapsed minutes since January 1, 1970: " + secondsSinceEpoch + "<br>" + "<br>");



// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 
var date_format = '12'; /* FORMAT CAN BE 12 hour (12) OR 24 hour (24)*/
var d           = new Date();
var hour        = d.getHours();  /* Returns the hour (from 0-23) */
var minutes     = d.getMinutes();  /* Returns the minutes (from 0-59) */
var ext;
if (date_format == '12') {
    if (hour > 12) {
        ext = 'PM';

        if (hour < 10) {
        } else if (hour == 12) {
            ext = 'AM';
        }
    }
    else if (hour < 12) {
        ext = 'AM';
    } else if (hour == 12) {
        ext = 'PM';
    }
}
document.write("It's " + ext + "<br>" + "<br>");

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 
var d = new Date(2020, 11, 31, 00, 00);
document.write("Later date: " + d + "<br>" + "<br>");


// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1 st  Ramadan? 
// Note: 1 st  Ramadan was on June 18, 2015 
// JavaScript program to illustrate  
// calculation of no. of days between two date  

// To set two dates to two variables 
var date1 = new Date("06/18/2015");
var date2 = new Date();

// To calculate the time difference of two dates 
var Difference_In_Time = (date2.getTime() - date1.getTime()); 
  
// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
var difference = Math.round(Difference_In_Days)
  
//To display the final no. of days (result) 
document.write(difference + " days have passed since 1st Ramadan,2015" + "<br>" + "<br>"); 



// 10.  Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015. 
date1 = new Date( "Dec 05, 2015 20:15:10" );
document.write("On reference date " + date2 + "<br>"); 
var date2 = new Date();
// To calculate the time difference of two dates 
var Difference_In_Time = (date2.getTime() - date1.getTime()); 
 
// To calculate the no. of days between two dates 
var seconds = Difference_In_Time / (1000); 
var difference = Math.round(seconds)
document.write(difference + " seconds had passed since beginning of 2015" + "<br>" + "<br>"); 



// 11.  Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and finally display the date object in your browser. 
var rightNow = new Date();
document.write("current date: " + rightNow + "<br>");
var pasthr = rightNow.getMinutes() - 60;
rightNow.setMinutes(pasthr);
document.write("1 hour ago, it was " + rightNow + "<br>" + "<br>");


// 12.  Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 
var d = new Date();
document.write("current date: " + d + "<br>");
var pastYear = d.getFullYear() - 100;
d.setFullYear(pastYear);
document.write("100 years back, it was " + d + "<br>" + "<br>");


// 13.  Write a program to ask the user about his age. Calculate and show his birth year in your browser. 
var number = prompt("Enter the age"); 
document.write("Your age is " + number + "<br>");
var date = new Date().getFullYear()
var birthyear = (date - number);
document.write("Your birth year is " + birthyear + "<br>" + "<br>");

// 14.  Write a program to generate your K-Electric bill in your browser. 
// All the amounts should be rounded off to 2 decimal places. Display the following fields: 
// a. Customer Name 
// b. Current Month 
// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) 
// Where, 
// Net Amount Payable (within Due Date) = Number of units * Charges per unit 
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge 
document.write("K-Electric Bill " + "<br>" + "<br>");
var name = prompt("Enter the Customer Name "); 
document.write("Customer Name: " + name + "<br>");
var month = prompt("Enter the Current Month "); 
document.write("Month: " + name + "<br>");
var units = prompt("Enter the Number of units "); 
document.write("Number of units: " + units + "<br>");
var Charges = prompt("Enter the Charges per unit "); 
document.write("Charges per unit: " + Charges + "<br>" + "<br>");
var Payable = (units * Charges);
document.write("Net Amount Payable (within Due Date): " + Payable + "<br>");
var late = 350;
document.write("Late Payment Surcharge: " + late + "<br>");
var Surcharge = (Payable + late);
document.write("Gross Amount Payable (after Due Date): " + Surcharge + "<br>" + "<br>");
















