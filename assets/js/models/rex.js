function Rex(ctx) {
  this.ctx = ctx;

  this.x = 30;
  this.y = 200;

  this.img = new Image();
  this.img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhAAAABeCAMAAABFE92OAAAACVBMVEX///9TU1P39/ea77PDAAADeUlEQVR4nO3W247bMAyE4dTv/9AFgXopOzqQiqkV038uFqiTfBkwc9HXy5HDGI+JG++GJdshcIOT7RC4wcl2CNzAnGX+DOItjBvrnhm5bjDbIXCvGbluMNshcK8ZuW4w2yFwrxm5btBSdqY0bqwrsboeM90hcDVW12NeCo++ZIdDrOgb6fbs2UGMXI/JIBa7PZtBPHDgXK7+/dQtO45cj8kglrr691O37Bg2iFF2G0Q2l0HgMgjctns+e8ItnZHrMVMfOJt7PnvCLZ2R6zFTH/h/diVW12OmOwSuxup6zHSHwNVYXY+Z7hC4GqvrMdMdAldjdT1mukPgaqyux0x3CFyN1fWY6Q6Bq7G6HrNZ+GgE9xm39V1WV2J1PebXHDib2/ouqyuxuh7zaw6czW19l9WVWF2P+TUHzua2vsvqSqzupUzvS87XvUVxY11rRm6zUJZD4PoycpuFshwC15eR2yyU5RC4vozctzLtLzuOXtmjEtw17vlDv5vXDAdQq5TpELgaBoHLIHDrrmTpIPpV3wvjrnUl8p7ac321nvZnEh4CVyPvqT3XV+tpfybhIXA18p7ac321nvZnEh4CVyPvqT3XV+tpf6YofC/Qr/peHHetW/7k9ilcwyC+yGUQuAwCt+0uGURZ2lq0VRg31r3/8J4xnO9jEF/kMghcBoG7wSA8OYrgrnWtP34t1SFkPQQug8BlELgjd9tB4P6OK5l1e2a6Q+BqZt2eme4QuJpZt2emOwSuZtbtmR+VHhXGjXUlM+7ITHcIXM2MOzKnClvK4sa6Eq9rMdMdAlfjdS3mVGlrYdxYV+JxrWa6Q+BqPK7VTHcIXI3HtZrpDoGr8bhW01X6+BfcPVyJxfV4KQ+Bq7G4Hi/lIXA1FtfjpTwErsbiejxz6ZmyuPGupOfOeKGFcWNdSc+d8UIL48a6kp4744UWxo11JT13xvspfC9d/vuTQ6x0r8/8+t1o/fupvk8MQnIfAYNgEAyCQWgYBIO45PFBnKXLguWzT8qudq+Zc1uj2PEOktoAGMSLQdyffWIyiMJlEC8GUboMolHuyUOscJ/KfVI730FS+/EZxINhEC8GcbcZBIO42AziaP+n55PSK92o7HwHyWmMnm1RmEG0DQbBIBgEg2gb2w+iTOvZzm5Udr5DWBhE7HcxiF9wo7LzHcLCIGK/a+dB/AVegoQpjtn6oQAAAABJRU5ErkJggg==";
  this.img.frames = 6;
  this.img.frameIndex = 0;

  this.w = 200;
  this.h = 200;
}

Rex.prototype.draw = function() {
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
}