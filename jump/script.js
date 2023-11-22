var canvas = document.getElementById("myCanvas");
canvas.style.backgroundPosition = 0;
var ctx = canvas.getContext("2d");
var totalFrames = 0;

var me = new Image();
me.src = "trotSheet.png";
var frameW = 168;
var frameH = 208;
var frameIndex = 0;
var frameCount = 21;

var x = canvas.width/4;
var y = 390;
var dx = 2;
var dy = -2;
const grav = -0.125;
var vy = 0;

let rightPressed = false;
let leftPressed = false;
let spacePressed = false;

function drawSprites() {
    if (rightPressed) {
        speed = 3;
    } else if (leftPressed) {
        speed = 7;
    } else {
        speed = 5;
    }
    // this will be 1 / x percent original speed
    // ex: totalFrames % 5 == 0 will be 1/5 (20%) original speed
    if (totalFrames % speed == 0) {
        frameIndex++;
        frameIndex %= 16;
    }
    ctx.drawImage(me, frameIndex * frameW, 0, frameW, frameH, x, y, frameW, frameH)
    canvas.style.backgroundPositionX = `${(-totalFrames/4) % 511}px`;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    totalFrames++;
    drawSprites();
    handleMovement();
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
    if (e.key === " ") {
        spacePressed = true;
    }
    //console.log(e.key);
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
    if (e.key === " ") {
        spacePressed = false;
    }
}

function handleMovement() {
    if (rightPressed && x < canvas.width) {
        x += dx;
    }
    if (leftPressed && x > 0) {
        x -= dx;
    }
    if (spacePressed && y >= 390) {
        vy = 10;
    }
    gravity();
}

function gravity() {
    if (y >= 390 && !spacePressed) {
        y = 390;
        vy = 0;
    } else {
        vy += grav;
        y -= dy + vy;
    }
}

const interval = setInterval(draw, 10);