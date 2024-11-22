function Fruit() {
  this.x = [];
  this.y = [];

  this.pickLocation = function(num) {
    this.x[num] = (Math.floor(Math.random() *
      columns - 1) + 1) * scale;
    this.y[num] = (Math.floor(Math.random() *
      rows - 1) + 1) * scale;
    for (let i = 0; i < this.x.length; i++) {
      if (this.x[num] == this.x[i] && this.y[num] == this.y[i] && i != num) {
        this.pickLocation(num)
      }
    }
  }

  this.draw = function() {
    ctx.fillStyle = "#ff0000";
    for (let i = 0; i < this.x.length; i++) {
      ctx.fillRect(this.x[i], this.y[i], scale, scale)
    }
  }
}
