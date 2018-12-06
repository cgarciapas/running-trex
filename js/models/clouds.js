function Clouds(ctx) {
  this.ctx = ctx;

  this.w = 60;
  this.h = 30;

  this.x = this.ctx.canvas.width;
  this.y = Math.floor(Math.random() * 230) + 50;

  this.img = new Image();
  this.img.src = "./images/2x-cloud.png";

  this.vx = -2;
}

Clouds.prototype.move = function() {
  this.x += this.vx;
}

Clouds.prototype.draw = function() {
  this.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
  )
}