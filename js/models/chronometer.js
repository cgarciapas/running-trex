// Constructor
function Chronometer() {
  this.secDec  = document.getElementById('secDec');
  this.secUni  = document.getElementById('secUni');

  this.currentTime = 0;
  this.isRunning = true;
  this.seconds = document.getElementsByClassName("seconds");
}

Chronometer.prototype.startChrono = function () {
  setInterval(function() {
    if (this.isRunning === true){
      this.currentTime++;
      this.updateDisplays();
    }
  }.bind(this), 1000);
};

Chronometer.prototype.updateDisplays = function () {
  var seconds = this.currentTime % 60 + '';
  seconds = (seconds) > 9 ? seconds + '' : '0' + seconds;
  this.secUni.innerText = seconds[1];
  this.secDec.innerText = seconds[0];
};

Chronometer.prototype.stopChrono =  function() {
  this.isRunning = false;
}