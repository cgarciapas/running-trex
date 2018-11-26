function Background(ctx) {
  this.ctx = ctx;

  this.x = 0;
  this.y = 0;

  this.vx = -4;
  this.vy = 0;

  this.w = this.ctx.canvas.width;
  this.h = 60

  this.img = new Image();
  this.img.src = "images/2x-horizon.png";
}

Background.prototype.draw = function() {
  this.ctx.drawImage(
    this.img,
    this.x,
    this.ctx.canvas.height - this.h,
    this.w,
    this.h/3
  );

  this.ctx.drawImage(
    this.img,
    this.x + this.w,
    this.ctx.canvas.height - this.h,
    this.w,
    this.h/3
  );
}

Background.prototype.move = function() {
  this.x += this.vx;

  if (this.x + this.w <= 0) {
    this.x = 0;
  }
}