// This creates the canvas elements and sets the size

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;

// Background image
var background = new Image();
background.src = "img/Rectangle.png";

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    ctx.drawImage(background,0,0);   
}

ctx.beginPath();
ctx.rect(0, 0, 50, 50);
ctx.stroke();
ctx.fillStyle = "#FFFFFF";
ctx.fill();
