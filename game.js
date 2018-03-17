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
    
    //Math to center the square
    var startPosEq1 = 512 + 480;
    var startPosEq2 = startPosEq1/2;
    var startPos = startPosEq2/2;
    
    console.log(startPos);
    
    ctx.drawImage(background,0,0);  
    
    ctx.beginPath();
    ctx.rect(startPos, startPos, 50, 50);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

}

