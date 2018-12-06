function Birds(ctx) {
  this.ctx = ctx;

  this.w = 50;
  this.h = 50;

  this.x = this.ctx.canvas.width;
  // this.y = Math.floor(Math.random() * 70) + 210;
  this.y = 70 + 210;
  
  this.img = new Image();
  this.img.src = "./images/birds-sprite-2x.png";

  this.img.frames = 2;
  this.img.frameIndex = 0;

  this.drawCount = 0;

  this.vx = -3;
}

Birds.prototype.move = function() {
  this.x += this.vx;
}

Birds.prototype.animate = function() {
  if (++this.img.frameIndex > 1) {
    this.img.frameIndex = 0;
  }
}

Birds.prototype.draw = function() {
  this.drawCount++;
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
  );
  if (this.drawCount % 8 === 0) {
    this.drawCount = 0;
    this.animate();
  }
}