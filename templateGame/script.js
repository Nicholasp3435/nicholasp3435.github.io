import { Sprite } from "../lib/Sprite.js";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const sprite = new Sprite(300,200);

const sprite2 = new Sprite(100,200);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sprite.draw(ctx);
    sprite2.draw(ctx);
    sprite2.handleMovement();
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

setInterval(draw, 10);