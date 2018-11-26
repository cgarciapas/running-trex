function Game(canvas) {
  this.ctx = canvas.getContext("2d");
  this.bg = new Background(this.ctx);
  this.rex = new Rex(this.ctx);
}

Game.prototype.start = function() {
  this.intervalId = setInterval(function() {

  this.clear();
  this.draw();
  this.move();

  }.bind(this), DRAW_INTERVAL_MS)
}

Game.prototype.draw = function() {
  this.bg.draw();
  this.rex.draw();
}

Game.prototype.move = function() {
  this.bg.move();
}

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
}