
// task 1
function showMessage(){
    var input1 = document.getElementById('1').value;
    var input2 = document.getElementById('2').value;
    var input3 = document.getElementById('3').value;
    var input4 = document.getElementById('4').value;
    var output = "<h1>Your Details</h1>" + "<br>" + "First Name: " + input1 + '<br> ' + "Last Name: " + input2 + '<br> '+ "Email: " + input3 + ' <br>'+ "Password: " + input4;
    var a = document.getElementById('print').innerHTML = output;
    document.write(a)
}







// task 2
function readMore(){
    var text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit beatae similique laudantium eaque dicta reprehenderit vel, accusantium odit facere perspiciatis sint, optio fuga, cum magnam saepe sit accusamus provident error!"
    var paragraph = document.getElementById('paragraph')
    paragraph.innerHTML = text;
}



  // task 3
function myFunction(r) {
    var i = r.parentNode.parentNode.rowIndex;                               //row ka mana kia tha Sir ne 
    document.getElementById("myTable").deleteRow(i);
  }


