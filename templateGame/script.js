import { Sprite } from "../lib/Sprite.js";
import { Camera } from "../lib/Camera.js";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let allSprites = [];

const sprite = createSprite(300,200);
sprite.setImage("appleFly.png");
sprite.setHitbox(216, 72);

const sprite2 = createSprite(100,200);
sprite2.setHitbox(128, 64, 0, 64);

const sprite3 = createSprite(100,200);
sprite3.addAnimation("apple", "appleFly.png", 72, 72, () => {
    sprite3.setAnimation("apple");
});


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
    camera.lockOn(sprite2, canvas);
    ctx.save();
    ctx.translate(-camera.x, -camera.y);
    drawScene();
    debugHitboxes();
    ctx.restore();
    drawUI();
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

function createSprite(x, y) {
    const newSprite = new Sprite(x, y);
    allSprites.push(newSprite);
    return newSprite;
}

function debugHitboxes() {
    allSprites.forEach(sprite => {
        sprite.drawHitbox(ctx);
    });
}

const interval = setInterval(draw, 10);