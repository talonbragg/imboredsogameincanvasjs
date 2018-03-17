// This creates the canvas elements and sets the size
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

// Background image
var background = new Image();
background.src = "img/Rectangle.png";



// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function() {

    // Math to center the character
    x = 500 / 2 - 50 / 2;
    y = 500 / 2 - 50 / 2;
    
    var velY = 0,
    velX = 0,
    speed = 2,
    friction = 0.98,
    keys = [];
    
    ctx.drawImage(background, 0, 0);

    ctx.beginPath();
    ctx.rect(x, y, 50, 50);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    function(update) {
    requestAnimationFrame(update);
    
    if (keys[38]) {
        if (velY > -speed) {
            velY--;
        }
    }
    
    if (keys[40]) {
        if (velY < speed) {
            velY++;
        }
    }
    if (keys[39]) {
        if (velX < speed) {
            velX++;
        }
    }
    if (keys[37]) {
        if (velX > -speed) {
            velX--;
        }
    }

    velY *= friction;
    y += velY;
    velX *= friction;
    x += velX;

    if (x >= 295) {
        x = 295;
    } else if (x <= 5) {
        x = 5;
    }

    if (y > 295) {
        y = 295;
    } else if (y <= 5) {
        y = 5;
    }
        
    ctx.clearRect(0, 0, 300, 300);    
    }

    update();

    document.body.addEventListener("keydown", function(e) {
        keys[e.keyCode] = true;
    });
    document.body.addEventListener("keyup", function(e) {
        keys[e.keyCode] = false;
    });
}
