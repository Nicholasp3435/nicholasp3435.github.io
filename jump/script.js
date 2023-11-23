var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var totalFrames = 0;

var trotSprite = new Image();
trotSprite.src = "trotSheet.png";
var flySprite = new Image();
flySprite.src = "flySheet.png";
var shadow = new Image();
shadow.src = "shadow.png";
var frameW = 168;
var frameH = 208;
var trotFrameIndex = 0;
var flyFrameIndex = 0;
// off-x, off-y, size-x, size-y
var hitboxOffset = [0,0,100,100];

var appleSprite = new Image();
appleSprite.src = "appleFly.png";
var appleFrameW = 72;
var appleFrameH = 72;
var appleFrameIndex = 0;

var backImg = new Image();
backImg.src = "backSheet.png";
var backTiles = [];
for (let c = 0; c < 11; c++) {
    backTiles[c] = [];
    for (let r = 1; r < 2; r++) {
        backTiles[c][r] = { x: 24 * c, y: 24 * r, index: [0,1]};
    }
    backTiles[c][0] = { x: 24 * c, y: 24 * 0, index: [randint(0,2),3]};
    backTiles[c][2] = { x: 24 * c, y: 24 * 2, index: [randint(0,3),2]};
    backTiles[c][3] = { x: 24 * c, y: 24 * 3, index: [randint(1,3),1]};
    backTiles[c][4] = { x: 24 * c, y: 24 * 4, index: [randint(0,3),0]};
}

var x = canvas.width/4;
var y = 390;
var dx = 2;
var dy = -2;
const grav = -0.125;
var vy = 0;

let isFlying = false;

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let spacePressed = false;

var appleX = 1100;
var appleY = 100;

var score = 0;

function drawSprites() {
    if (rightPressed) {
        speed = 3;
    } else if (leftPressed) {
        speed = 7;
    } else {
        speed = 5;
    }

    ctx.drawImage(shadow, x + 10, 475 + 168/2);

    // this will be 1 / x percent original speed
    // ex: totalFrames % 5 == 0 will be 1/5 (20%) original speed
    if (isFlying) {
        if (totalFrames % 5 == 0) {
            flyFrameIndex++;
            flyFrameIndex %= 10;
        }
        ctx.drawImage(flySprite, flyFrameIndex * frameW, 0, frameW, frameH, x, y, frameW, frameH);
    } else {
        if (totalFrames % speed == 0) {
            trotFrameIndex++;
            trotFrameIndex %= 16;
        }
        ctx.drawImage(trotSprite, trotFrameIndex * frameW, 0, frameW, frameH, x, y, frameW, frameH);
    }

    if (totalFrames % 10 == 0) {
        appleFrameIndex++;
        appleFrameIndex %= 3;
    }
    ctx.drawImage(appleSprite, appleFrameIndex * appleFrameW, 0, appleFrameW, appleFrameH, appleX, appleY, appleFrameW, appleFrameH);
}

function drawBackground() {
    ctx.scale(5,5);

    backTiles.forEach(c => {
        c.forEach(tile => {
            if (totalFrames % 2 == 0) {
                tile.x--;
            }
            if (tile.x < -24) {
                tile.x = 239;
                if (tile.y == 24 * 2) {
                    tile.index = [randint(0,3),2];
                } else if (tile.y == 24 * 3) {
                    tile.index = [randint(1,3),1];
                } else if (tile.y == 24 * 4) {
                    tile.index = [randint(0,3),0];
                }
            }
            ctx.drawImage(backImg, tile.index[0] * 24, tile.index[1] * 24, 24, 24, tile.x, tile.y, 24, 24);
        });
    });
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function drawUI() {
    ctx.font = "32px Monaco";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Score: ${score}`, 10, 40);
}

function draw() {
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawSprites();
    ctx.imageSmoothingEnabled = true;
    drawUI();
    handleMovement();
    appleMovement();
    isTouching();
    totalFrames++;
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
    if (e.key === "Up" || e.key == "ArrowUp") {
        upPressed = true;
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
    if (e.key === "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
}

function handleMovement() {
    if (rightPressed && x < canvas.width - 168) {
        x += dx;
    }
    if (leftPressed && x > 0) {
        x -= dx;
    }
    if (upPressed && y > -48) {
        vy = 5;
        isFlying = true;
    }
    gravity();
}

function gravity() {
    if (y >= 375 && !upPressed) {
        y = 375;
        vy = 0;
        isFlying = false;
    } else {
        vy += grav;
        y -= dy + vy;
    }
}

let A = randnum(100,200);
let B = randnum(0.01, 0.05);
let C = randnum(0, Math.PI * 2 / B);
let D = randnum(125,400);

function appleMovement() {
    appleX -=1.5;
    if (isTouching()) {
        respawnApple();
        score--;
    }
    if (appleX < -20) {
        respawnApple();
        score++;
    }
    appleY = A * Math.sin(B * (appleX - C)) + D;
}

function respawnApple() { 
    appleX = 1100;
    A = randnum(100,200);
    B = randnum(0.01, 0.05);
    C = randnum(0, Math.PI * 2 / B);
    D = randnum(125,400);
}

function isTouching() {
    if (appleX - x <= 168 && appleX - x >= 0) {
        if (appleY - y <= 208 && appleY - y >= 55) {
            return true;
        }
    } 
    if (appleX - x <= 168 && appleX - x >= 84) {
        if (appleY - y <= 208 && appleY - y >= -30) {
            return true;
        }
    }
}

// inclusive integer between [a, b]
function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function randnum(a, b) {
    return Math.random() * (b - a) + a;
}

const interval = setInterval(draw, 10);