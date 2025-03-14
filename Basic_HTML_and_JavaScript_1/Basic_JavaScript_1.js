alert("Hello, World! I am an alert box!");

function MyFirstFunction() {
    var String = "Kiss me, I'm Irish!";
    var result = String.fontcolor("green");
    document.getElementById("Irish").innerHTML = result;
}

function changeTextSize() {
    const elementsWithClassParagraph = document.getElementsByClassName("paragraph");
    elementsWithClassParagraph[0].style.fontSize = "xx-large";
    elementsWithClassParagraph[1].style.fontSize = "large";
}

var canvas = document.getElementById("myCanvas");
var canvasText = canvas.getContext("2d");
canvasText.font = "30px Arial";
canvasText.fillText("Hello World", 20, 60);
