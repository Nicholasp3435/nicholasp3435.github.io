import { Sprite } from "../lib/Sprite.js";
import { Camera } from "../lib/Camera.js";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let frameCount = 0;

let debuggingMode = true;

let allSprites = [];

const sprite = createSprite(300,200);
sprite.setImage("appleFly.png");
sprite.setHitbox(216, 72);

const sprite2 = createSprite(100,200);
sprite2.setHitbox(128, 64, 0, 64);

const sprite3 = createSprite(0,0);
sprite3.addAnimation("apple", "appleFly.png", 72, 72, () => {
    sprite3.setAnimation("apple");
});
sprite3.setHitbox(72, 72);
sprite3.isUI = true;


const camera = new Camera(0,0);

function drawScene() {
    sprite.draw(ctx);
    sprite2.draw(ctx);
    sprite2.handleMovement();
}

function drawUI() {
    sprite3.draw(ctx, 0.05);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const canvasMousePosition = getRelativeMousePosition(ctx, false);
    const cameraMousePosition = getRelativeMousePosition(ctx, true);
    camera.lockOn(sprite2, canvas);
    ctx.save();
    ctx.translate(-camera.x, -camera.y);
    drawScene();
    debugSceneHitboxes();
    ctx.restore();
    drawUI();
    debugUIHitboxes();
    if (sprite2.mouseIsOver(canvasMousePosition)) {
        console.log("Mouse is over the sprite");
    }
    if (sprite3.mouseIsOver(cameraMousePosition)) {
        console.log("Mouse is over the sprite");
    }
    frameCount++;
}

sprite2.handleMovement = function() {
    if(keydown("ArrowRight") && !this.willCollideWith(sprite, 1, 0)) {
        this.x+=2;
    }
    if(keydown("ArrowLeft") && !this.willCollideWith(sprite, -1, 0)) {
        this.x-=2;
    }
    if(keydown("ArrowUp") && !this.willCollideWith(sprite, 0, -1)) {
        this.y-=2;
    }
    if(keydown("ArrowDown") && !this.willCollideWith(sprite, 0, 1)) {
        this.y+=2;
    }
}


// util functions

// for keyDown
const keysPressed = {};
document.addEventListener('keydown', (e) => {
    keysPressed[e.key] = true;
});
document.addEventListener('keyup', (e) => {
    keysPressed[e.key] = false;
});
function keydown(key) {
    return keysPressed[key] === true;
}

// for mouseDown
const mousePressed = {};
document.addEventListener('mousedown', (e) => {
    mousePressed[e.button] = true;
});
document.addEventListener('mouseup', (e) => {
    mousePressed[e.button] = false;
});
function mouseDown(button) {
    return mousePressed[button] === true;
}

// for mousePosition (and mouseIsOver)
let rawMousePosition = { x: 0, y: 0 };
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    rawMousePosition.x = event.clientX - rect.left;
    rawMousePosition.y = event.clientY - rect.top;
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