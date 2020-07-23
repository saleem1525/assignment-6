// task 1

function display()  
{  
  var x=document.getElementById("base").value;  
  var y=document.getElementById("exp").value;  
    
  document.getElementById("result").innerHTML=Math.pow(x,y);  
}  

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

// task 3
 

    var a = +prompt("enter length a : ");
    var b = +prompt("enter length b : ");
    var c = +prompt("enter length c : ");
    var S = 0;4.5,2.5,0.5
    function swl(a,b,c)
    {
        S = (a + b + c)/2;
        return S;
    }
    swl(a,b,c);
    
    function area(S,a,b,c)
    {
        alert("Area of triangle is " + (S * (S-a) * (S-b) * (S-c)) + " units");
    }
    area(S,a,b,c);






    // task 4


      function mainFunction(){
        average(33,44,55)
        percentage(33,44,55)
    }
    function average(sub1,sub2,sub3){
        x = (sub1+sub2+sub3)/3
        alert("Average is " + x)
    }
    function percentage(sub1,sub2,sub3){
        var total = 300;
        y = ((sub1+sub2+sub3)/total)*100
        alert("Percentage is " + y)
    }
    mainFunction()


// task 5
function indexof(chr, str) {
    var str_arr = str.split("");
    alert(str_arr.indexOf(chr));
}
indexof('i', 'This is a string');

   
// task 6
function removeVowels(str) {
    if (str.length > 25) {
        alert("length of the string must be less then 25.");
    } else {
        str = str.replace(/[aeiou]/gi, "")
        alert(str);
    }
}
removeVowels("This is a Sentance");



// task 7
var para = "Pleases read this application and give me gratuity";
    var count = 0
     function vowelsCounter(txt){
       for(var i=0;i<=para.length;i++){
           switch(para.slice(i,i+2)){
               case "ae":
               count ++;
               break;
               case "ai":
               count ++;
               break;
               case "ao":
               count ++;
               break;
               case "au":
               count ++;
               break;
               case "aa":
               count ++;
               break;
               case "ea":
               count ++;
               break;
               case "ee":
               count ++;
               break;
               case "ei":
               count ++;
               break;
           }
       }
       return count;
     } alert(vowelsCounter(para))


// task 8

var kiloMeters = prompt("Enter distance in kilometers? ")
    function citiesDist(distance){
        function meters(){
            var meter = distance * 1000;
            return meter
        }
        function feet(){
            var feet = distance * 3280.84
            return feet
        }
        function inches(){
            var inches = distance * 39370.1
            return inches
        }
        function centiMeter(){
            var cm = distance * 100000
            return cm 
        }
        alert("Meters = " + meters() + " Feet = " + feet() + " Inches = " + inches() + " Centimeters = " + centiMeter())
    }
    citiesDist(kiloMeters)



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