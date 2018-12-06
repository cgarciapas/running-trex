function Cactus(ctx) {
  this.ctx = ctx;

  this.w = 70;
  this.h = 60;

  this.x = this.ctx.canvas.width;
  this.y = 300;
  
  this.img = new Image();
  this.img.src = "./images/2x-obstacle-large.png";

  this.img.frames = 3;
  this.img.frameIndex = 0;

  this.vx = -4;
}

Cactus.prototype.move = function() {
  this.x += this.vx;
}

Cactus.prototype.draw = function() {
  this.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    this.img.width / this.img.frames,
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  )
}