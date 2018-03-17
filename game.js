var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


canvas.width = 500;
canvas.height = 500;

// Background image
var background = new Image();
background.src = "img/Rectangle.png";


// Make sure the image is loaded first otherwise

    setInterval(draw, 10);
    // Math to center the character
    x = 500 / 2 - 50 / 2;
    y = 500 / 2 - 50 / 2;
    var dx = -5;
    var dy = 5;
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
    
    function drawRect() {
//  clear();    
    ctx.beginPath();
    ctx.rect(x, y, 50, 50);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawRect();
    }
    
    function doKeyDown(evt){
switch (evt.keyCode) {
case 38:  /* Up arrow was pressed */
if (y - dy > 0){
y -= dy;
}
break;
case 40:  /* Down arrow was pressed */
if (y + dy < HEIGHT){
y += dy;
}
break;
case 39:  /* Left arrow was pressed */
if (x - dx > 0){
x -= dx;
}
break;
case 37:  /* Right arrow was pressed */
if (x + dx < WIDTH){
x += dx;
}
break;
}
}
    setInterval(draw, 10);
    window.addEventListener('keydown', doKeyDown, true);

