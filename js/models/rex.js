function Rex(ctx) {
  this.ctx = ctx;

  this.w = 50;
  this.h = 50;

  this.x = 40;
  this.y = this.ctx.canvas.height - this.h - 50;

  this.y0 = this.y;

  this.vx = 0;
  this.vy = 0;

  this.g = 0.3;

  this.img = new Image();
  this.img.src = "./images/2x-trex.png";
  this.img.frames = 6;
  this.img.frameIndex = 0;

  this.drawCount = 0;

  this.setListeners();
  
  this.canAnimate = true;
  this.isCrouching = false;
}

Rex.prototype.draw = function() {
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
  if (this.drawCount % 3 === 0) {
    this.drawCount = 0;
    if (this.canAnimate){
      this.animate();
    }
  }
}

Rex.prototype.setListeners = function() {
  document.onkeydown = this.onKeyDown.bind(this);
  document.onkeyup = this.onKeyUp.bind(this);
};

Rex.prototype.onKeyDown = function(e) {
  switch (e.keyCode) {
    case KEY_UP:
      this.jump();
      break;
    case KEY_SPACE:
      this.jump();
      break;
    case KEY_DOWN:
      this.crouch();
      this.isCrouching = true;
      break;
  }
};

Rex.prototype.onKeyUp = function(e) {
  switch (e.keyCode) {
    case KEY_UP:
      this.canAnimate = true;
      break;
    case KEY_SPACE:
      this.canAnimate = true;
      break;
    case KEY_DOWN:
      this.canAnimate = true;
      this.img.frames = 6;
      this.img.src = "./images/2x-trex.png";
      this.isCrouching = true;
      break;
  }
};


Rex.prototype.crouch = function() {
  this.canAnimate = false;
  this.img.frames = 1;
  this.img.frameIndex = 0;
  this.img.src = "./images/down-sprite-2x.png";
}

Rex.prototype.jump = function() {
  this.canAnimate = false;
  if (this.isJumping()) {
    return;
  }
  this.img.frameIndex = 3;
  this.vy -= 10;
}

Rex.prototype.isJumping = function() {
  return this.y < this.y0;
}

Rex.prototype.move = function() {
  this.vy += this.g;
  this.y += this.vy;

  this.x += this.vx;
  
  if (this.y >= this.y0) {
    this.y = this.y0;
    this.vy = 0;
  }  
}

Rex.prototype.animate = function() {
    if (this.isJumping()) { return; }

    if (++this.img.frameIndex > 3) {
      this.img.frameIndex = 0;
    }
  }

Rex.prototype.colliedWidth = function(o) {
  if (this.isCrouching) {
    return this.x < o.x + o.w
      && this.x + this.w/1.3 > o.x
      && this.y < o.y + o.h - 50
      && this.h + this.y > o.y;
  }
  return this.x < o.x + o.w
    && this.x + this.w/1.3 > o.x
    && this.y < o.y + o.h
    && this.h + this.y > o.y;
}