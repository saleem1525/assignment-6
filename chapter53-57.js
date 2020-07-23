
// task 1

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }


// task 2
  var fontSize = 10;
  function zoomIn() {
    fontSize += 10;
    document.getElementById("para").style.fontSize = fontSize + "px";
  }
  function zoomOut() {
    fontSize -= 10;
    document.getElementById("para").style.fontSize = fontSize + "px";
  }