var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


canvas.width = 500;
canvas.height = 500;

// Background image
var background = new Image();
background.src = "img/Rectangle.png";


// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function() {

    setInterval(draw, 10);
    // Math to center the character
    x = 500 / 2 - 50 / 2;
    y = 500 / 2 - 50 / 2;
    var dx = 5;
    var dy = -5;
    var WIDTH = 500;
    var HEIGHT = 500;

    ctx.drawImage(background, 0, 0);

    ctx.beginPath();
    ctx.rect(x, y, 50, 50);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.rect(0,0,WIDTH,HEIGHT);
    ctx.closePath();
    
    function clear() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
    }
    
    function draw() {
//  clear();    
    ctx.beginPath();
    ctx.rect(x, y, 50, 50);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    }
    
    setInterval(draw, 10);
    window.addEventListener('keydown', doKeyDown, true);
}
