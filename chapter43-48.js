//task 2

function getbox(){
    alert('Thanks for purchasing a phone from us')
}


// task 3

function myFunction(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }



//task 4

function mouseOver() {
    document.getElementById("img").src = "images/car1.jpg";
}

function mouseOut() {
    document.getElementById("img").src = "images/car.jpg";
}




//task 5

var x = 0;

document.getElementById('output-area').innerHTML = x;

function button1() {
  document.getElementById('output-area').innerHTML = ++x;
}

function button2() {
  document.getElementById('output-area').innerHTML = --x;
}













