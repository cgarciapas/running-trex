function Background(ctx) {
  this.ctx = ctx;

  this.x = 0;
  this.y = 0;

  this.vx = -1;
  this.vy = 0;

  this.w = this.ctx.canvas.width;
  this.h = this.ctx.canvas.height;

  this.img = new Image();
  this.img.src = "https://raw.githubusercontent.com/chirag64/t-rex-runner-bot/gh-pages/img/2x-horizon.png";
}

Background.prototype.draw = function() {
  this.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h/3
  );

  this.ctx.drawImage(
    this.img,
    this.x + this.w,
    this.y,
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