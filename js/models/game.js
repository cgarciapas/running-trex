function Game(canvas) {
  this.ctx = canvas.getContext("2d");
  this.bg = new Background(this.ctx);
  this.rex = new Rex(this.ctx);

  this.clouds = [];
  this.obstacles = [];
  this.chrono = new Chronometer()
  this.drawCount = 0;

  this.playBtn = document.getElementById('play');
  this.playBtn.addEventListener('click', this.onClickPlayBtn.bind(this));
  
  this.nameInput = document.getElementById('name');
  this.nameInput.addEventListener('change', this.onChangeNameInput.bind(this));
  this.playerName = undefined;

  this.$infoPlayer = $('.info-player');

  this.restartBtn = document.getElementById('restart');
  this.restartBtn.addEventListener('click', this.onClickRestartBtn.bind(this));

  this.score = document.getElementById('score-container');
  this.timeScore = document.getElementById('time-score');
  this.nameScore = document.getElementById('name-score');
}

Game.prototype.onChangeNameInput = function(event) {
  this.playerName = event.target.value;
  if (this.playerName) {
    this.playBtn.classList.add('active');
  } else {
    this.playBtn.classList.remove('active');
  }
}

Game.prototype.onClickPlayBtn = function() {
  if (this.playerName) {
    this.$infoPlayer.hide();
    this.start();
  }
}

Game.prototype.start = function() {
  this.chrono.startChrono();
  
  this.intervalId = setInterval(function() {
  this.clear();
  this.draw();
  this.move();
    if (this.isGameOver()) {
      this.chrono.stopChrono();
      this.stop();
      this.restartGame();
    }
  }.bind(this), DRAW_INTERVAL_MS)
}

Game.prototype.setEvents = function() {
  this.startBtn.addEventListener('click', this.start.bind(this));
}

Game.prototype.stop = function() {
  clearInterval(this.intervalId);
  this.drawIntervalId = undefined;
}

Game.prototype.isGameOver = function() {
  return this.obstacles.some(function(o) {
    return this.rex.colliedWidth(o);
  }.bind(this))
}

Game.prototype.restartGame = function () {
  this.score.classList.add('on');
  this.restartBtn.classList.add('show');

  this.timeScore.innerText = this.chrono.currentTime;
  this.nameScore.innerText = this.playerName;
}

Game.prototype.onClickRestartBtn = function() {
  this.clouds = [];
  this.obstacles = [];
  this.chrono = new Chronometer()
  this.drawCount = 0;

  this.restartBtn.classList.remove('show');

  location.reload();
}

Game.prototype.draw = function() {
  this.bg.draw();
 
  this.clouds.forEach(function(o) {
    o.draw();
  })

  this.rex.draw();

  this.obstacles.forEach(function(o) {
    o.draw();
  })

  this.drawCount++;

  if (this.drawCount % 100 === 0 && this.chrono.currentTime <= 5 )  {
    this.addCloud();
    this.addCactus();
    this.drawCount = 0;
  } else if (this.drawCount % 100 === 0 && this.chrono.currentTime > 5 && this.chrono.currentTime < 10) {
    this.addCloud();
    this.addBirds();
    this.drawCount = 0;
  } else if (this.drawCount % 150 === 0 && this.chrono.currentTime >= 10) {
    this.addCloud();
    this.addBirds();
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
  this.obstacles.push(o);
}

Game.prototype.addBirds = function() {
  var o = new Birds(this.ctx);
  this.obstacles.push(o);
}

Game.prototype.move = function() {
  this.bg.move();
  this.rex.move();

  this.clouds.forEach(function(o) {
    o.move();
  })

  this.obstacles.forEach(function(o) {
    o.move();
  })
}

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
}