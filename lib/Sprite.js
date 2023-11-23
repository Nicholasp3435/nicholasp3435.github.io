export class Sprite {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "/lib/defaultSprite.png";
        this.hitbox = { x: x, y: y, w: 128, h: 128 };
    }

    setImage (link) {
        this.image = new Image();
        this.image.src = link;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y);
    }

    setHitbox(width, height, offsetX = 0, offsetY = 0) {
        this.hitbox.w = width;
        this.hitbox.h = height;
        this.hitbox.offsetX = offsetX;
        this.hitbox.offsetY = offsetY;
    }

    drawHitbox(ctx) {
        ctx.save();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x + this.hitbox.offsetX, this.y + this.hitbox.offsetY, this.hitbox.w, this.hitbox.h);
        ctx.restore();
    }

    // checks if it is currently touching the specified sprite
    isTouching(sprite) {
        return  this.x + this.hitbox.offsetX < sprite.x + sprite.hitbox.offsetX + sprite.hitbox.w &&
                this.x + this.hitbox.offsetX + this.hitbox.w > sprite.x + sprite.hitbox.offsetX &&
                this.y + this.hitbox.offsetY < sprite.y + sprite.hitbox.offsetY + sprite.hitbox.h &&
                this.y + this.hitbox.offsetY + this.hitbox.h > sprite.y + sprite.hitbox.offsetY;
    }

    // checks a distance dx and dy for the specified sprite
    willCollideWith(sprite, dx, dy) {
        return  this.x + dx + this.hitbox.offsetX < sprite.x + sprite.hitbox.offsetX + sprite.hitbox.w &&
                this.x + dx + this.hitbox.offsetX + this.hitbox.w > sprite.x + sprite.hitbox.offsetX &&
                this.y + dy + this.hitbox.offsetY < sprite.y + sprite.hitbox.offsetY + sprite.hitbox.h &&
                this.y + dy + this.hitbox.offsetY + this.hitbox.h > sprite.y + sprite.hitbox.offsetY;
    }
}
