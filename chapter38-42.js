

// task 2

function check_leapyear(){
    //define variables
    var year;

    //get the entered year from text box 
    year = document.getElementById("year").value;

    //three conditions to find out the leap year
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
    {
        alert(year+" is a leap year");  
    }
    else
    {
        alert(year+" is not a leap year");  
    }
}


// task 9

function get_salary() {

    var hours = prompt("Please enter the number of hours you worked this week");
    var rate = 12;
    
    //Calculates over time pay or regular pay
    if (hours>= 40)
    
    {
    regpay = (rate * 40)
    overtimepay = rate * (hours - 40)
    pay = (regpay + overtimepay)
    
    // Send an alert with over time pay values
    alert ("You earned overtime this week! Your total pay is " + pay);
    
    }
    
    else 
    {
    regpay = (rate * hours)
    overtimepay = 0.00
    
    //send an alert with regular paid amount
    alert ("Your total pay is " + regpay);
    }
    }

    get_salary();
    
// task 10
    a=prompt("Enter number"," ");
    n=parseInt(a);
    h=Math.floor(n/100);
    n=n-h*100;
    f=Math.floor(n/50);
    n=n-f*50;
    t=Math.floor(n/10);
    n=n-t*10;
    document.write("you will have "+h+" hundred notes "+f+" fifty notes "+t+" ten notes."+"<br>"+"<br>");