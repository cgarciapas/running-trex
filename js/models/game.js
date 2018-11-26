function Game(canvas) {
  this.ctx = canvas.getContext("2d");
  this.bg = new Background(this.ctx);
  this.rex = new Rex(this.ctx);

  this.clouds = [];
  this.cactus = [];

  this.drawCount = 0;
}

Game.prototype.start = function() {
  this.intervalId = setInterval(function() {

  this.clear();
  this.draw();
  this.move();

  }.bind(this), DRAW_INTERVAL_MS)
}

Game.prototype.stop = function() {
    this.gameOver();
    this.crashed = true;
}

Game.prototype.draw = function() {
  this.bg.draw();
  this.rex.draw();

  this.clouds.forEach(function(o) {
    o.draw();
  })

  this.cactus.forEach(function(o) {
    o.draw();
  })

  this.drawCount++;

  if (this.drawCount % 200 === 0) {
    this.addCloud();
    this.addCactus();
    this.drawCount = 0;
  }
}

Game.prototype.addCloud = function() {
  var o = new Clouds(this.ctx);
  this.clouds.push(o);
}

Game.prototype.addCactus = function() {
  var o = new Cactus(this.ctx);
  this.cactus.push(o);
}

Game.prototype.move = function() {
  this.bg.move();
  this.rex.move();

  this.clouds.forEach(function(o) {
    o.move();
  })

  this.cactus.forEach(function(o) {
    o.move();
  })
}

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
}