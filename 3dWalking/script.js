import { Sprite } from "../lib/Sprite.js";
import { Camera } from "../lib/Camera.js";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let frameCount = 0;

let debuggingMode = false;

let allSprites = [];
let collidingSprites = [];
let uiSprites = [];

const groundTiles = [];
for (let c = 0; c < 16; c++) {
    groundTiles[c] = [];
    for (let r = 0; r < 16; r++) {
        groundTiles[c][r] = createSprite(c * 128, r * 128);
        groundTiles[c][r].setHitbox(128, 128);
        groundTiles[c][r].setImage("grass.png");
        if(r == 0 || r == 15 || c == 0 || c == 15 ) {
            setCollidable(groundTiles[c][r]);
        }
    }
}

const pony = createSprite(300,200);
pony.addAnimation("trotRight", "trotRightSheet.png", 168, 208, () => {});
pony.addAnimation("trotLeft", "trotLeftSheet.png", 168, 208, () => {});
pony.addAnimation("standLeft", "standLeft.png", 168, 208, () => {});
pony.addAnimation("standRight", "standRight.png", 168, 208, () => {
    pony.setAnimation("standRight");
});
pony.setHitbox(168, 104, 0, 104);
const shadow = createSprite(300,200);
shadow.setImage("shadow.png");

const sprite3 = createSprite(100,100);
sprite3.addAnimation("apple", "appleFly.png", 72, 72, () => {
    sprite3.setAnimation("apple");
});
sprite3.setHitbox(72, 72);
setUI(sprite3);


const camera = new Camera(0,0);

function drawScene() {
    groundTiles.forEach(c => {
        c.forEach(tile => {
            tile.draw(ctx);
        });
    });
    shadow.draw(ctx);
    pony.draw(ctx, 0.25);
    pony.handleMovement();
}

function drawUI() {
    sprite3.draw(ctx, 0.05);
}

function draw() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const canvasMousePosition = getRelativeMousePosition(ctx, false);
    const cameraMousePosition = getRelativeMousePosition(ctx, true);
    camera.lockOn(pony, canvas);
    ctx.save();
    ctx.translate(-camera.x, -camera.y);
    drawScene();
    debugSceneHitboxes();
    ctx.restore();
    drawUI();
    debugUIHitboxes();

    if (pony.mouseIsOver(canvasMousePosition) && mouseWentDown(0)) {
        console.log("Mouse is clicked over pony :3");
    }
    groundTiles.forEach( c => {
        c.forEach(tile => {
            if (tile.mouseIsOver(canvasMousePosition) && mouseWentDown(0)) {
                console.log(tile.x/128, tile.y/128);
            }
        });
    });
    
    if (sprite3.mouseIsOver(cameraMousePosition) && mouseWentDown(0)) {
        console.log("Mouse is over the sprite");
    }

    updatePreviousKeysPressed();
    updatePreviousMousePressed();
    frameCount++;
}

pony.handleMovement = function() {
    const moveX = 2;
    const moveY = 2;

    const canMove = (dx, dy) => {
        for (const sprite of collidingSprites) {
            if (this.willCollideWith(sprite, dx, dy)) {
                return false;
            }
        }
        return true;
    };

    let isMoving = false;

    if (keyDown("ArrowRight") && canMove(moveX, 0)) {
        this.x += moveX;
        this.isMirrored = false;
        isMoving = true;
    }
    if(keyDown("ArrowLeft") && canMove(-moveX, 0)) {
        this.x -= moveX;
        this.isMirrored = true;
        isMoving = true;
    }
    if(keyDown("ArrowUp") && canMove(0, -moveY)) {
        this.y -= moveY;
        isMoving = true;
    }
    if(keyDown("ArrowDown") && canMove(0, moveY)) {
        this.y += moveY;
        isMoving = true;
    }
    if(isMoving) {
        if (this.currentAnimation != this.animations["trotRight"] && !this.isMirrored) {
            this.setAnimation("trotRight");
        } else if (this.currentAnimation != this.animations["trotLeft"] && this.isMirrored) {
            this.setAnimation("trotLeft");
        }
    } else {
        if (!this.isMirrored) {
            this.setAnimation("standRight");
        } else {
            this.setAnimation("standLeft");
        }
    }
    shadow.x = this.x + 10;
    shadow.y = this.y + 185;
}


// util functions

// for keyDown and keyWentDown
const keysPressed = {};
const previousKeysPressed = {};
document.addEventListener('keydown', (e) => {
    keysPressed[e.key] = true;
});
document.addEventListener('keyup', (e) => {
    keysPressed[e.key] = false;
});
function keyDown(key) {
    return keysPressed[key] === true;
}
function updatePreviousKeysPressed() {
    Object.assign(previousKeysPressed, keysPressed);
}
function keyWentDown(key) {
    return keysPressed[key] && !previousKeysPressed[key];
}

// for mouseDown and mouseWentDown
const mousePressed = {};
const previousMousePressed = {};
document.addEventListener('mousedown', (e) => {
    mousePressed[e.button] = true;
});
document.addEventListener('mouseup', (e) => {
    mousePressed[e.button] = false;
});
function mouseDown(button) {
    return mousePressed[button] === true;
}
function updatePreviousMousePressed() {
    Object.assign(previousMousePressed, mousePressed);
}
function mouseWentDown(button) {
    return mousePressed[button] && !previousMousePressed[button];
}

// for mousePosition (and mouseIsOver)
let rawMousePosition = { x: 0, y: 0 };
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    rawMousePosition.x = e.clientX - rect.left;
    rawMousePosition.y = e.clientY - rect.top;
});
function getRelativeMousePosition(ctx, ui) {
    const transform = ctx.getTransform();
    const invertedTransform = transform.inverse(); 

    if (!ui) {
        return {
            x: rawMousePosition.x * invertedTransform.a + rawMousePosition.y * invertedTransform.c + invertedTransform.e + camera.x,
            y: rawMousePosition.x * invertedTransform.b + rawMousePosition.y * invertedTransform.d + invertedTransform.f + camera.y
        };
    } else {
        return {
            x: rawMousePosition.x,
            y: rawMousePosition.y
        };
    }

}


function createSprite(x, y) {
    const newSprite = new Sprite(x, y);
    allSprites.push(newSprite);
    return newSprite;
}

function setCollidable(sprite) {
    sprite.isCollidable = true;
    collidingSprites.push(sprite);
}

function setUI(sprite) {
    sprite.isUI = true;
    uiSprites.push(sprite);
}

function debugSceneHitboxes() {
    if (debuggingMode) {
        allSprites.forEach(sprite => {
            if (!sprite.isUI) {
                sprite.drawHitbox(ctx);
            }
        });
    }
}

function debugUIHitboxes() {
    if (debuggingMode) {
        allSprites.forEach(sprite => {
            if (sprite.isUI) {
                sprite.drawHitbox(ctx);
            }
        });
    }
}

const interval = setInterval(draw, 10);