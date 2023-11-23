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

    setHitbox (width, height) {
        this.hitbox.w = width;
        this.hitbox.h = height;
    }

    // checks if it is currently touching the specified sprite
    isTouching(sprite) {
        return  this.x < sprite.x + sprite.hitbox.w &&
                this.x + this.hitbox.w > sprite.x &&
                this.y < sprite.y + sprite.hitbox.h &&
                this.y + this.hitbox.h > sprite.y;
    }

    // checks a distance x and y for the specified sprite
    willCollideWith(sprite, dx, dy) {
        return this.x + dx < sprite.x + sprite.hitbox.w &&
               this.x + this.hitbox.w + dx > sprite.x &&
               this.y + dy < sprite.y + sprite.hitbox.h &&
               this.y + this.hitbox.h + dy > sprite.y;
    }
}
