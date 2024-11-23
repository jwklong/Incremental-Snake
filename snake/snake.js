function Snake() {
  this.x = 50;
  this.y = 50;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.total2 = 0;
  this.multi = 1
  this.multi2 = 1
  this.multi2Output = 0
  this.tail = [];

  this.draw = function() {
    ctx.fillStyle = "#00FF00";
    for (let i=0; i<this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x,
        this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function() {
    for (let i=0; i<this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i+1];
    }

    this.tail[this.total] =
      { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x >= canvas.width) {
      this.x = 0;
    }

    if (this.y >= canvas.height) {
      this.y = 0;
    }

    if (this.x < 0) {
      this.x = canvas.width;
    }

    if (this.y < 0) {
      this.y = canvas.height;
    }
  }

  this.changeDirection = function(direction) {
    switch(direction) {
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 'Left':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case 'Right':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  }

  this.eat = function(fruit) {
    if (this.x === fruit.x &&
      this.y === fruit.y) {
      this.total++;
      return true;
    }

    return false;
  }

  this.checkCollision = function() {
    for (var i=0; i<this.tail.length; i++) {
      if (this.x === this.tail[i].x &&
        this.y === this.tail[i].y) {
          //console.log("1a: t1 ",this.total," | t2 ",this.total2," | m1 ",this.multi," | m2 ",this.multi2," | m2out ",this.multi2Output)
          this.multi2Output = ((this.multi2 - 1) * this.total) + 1
          //console.log("1b: t1 ",this.total," | t2 ",this.total2," | m1 ",this.multi," | m2 ",this.multi2," | m2out ",this.multi2Output)
          this.total = (this.multi2Output * this.total);
          //console.log("2: t1 ",this.total," | t2 ",this.total2," | m1 ",this.multi," | m2 ",this.multi2," | m2out ",this.multi2Output)
          this.total2 += Math.round(this.total * this.multi);
          //console.log("3: t1 ",this.total," | t2 ",this.total2," | m1 ",this.multi," | m2 ",this.multi2," | m2out ",this.multi2Output)
          this.total = 0;
          //console.log("4: t1 ",this.total," | t2 ",this.total2," | m1 ",this.multi," | m2 ",this.multi2," | m2out ",this.multi2Output)
          this.tail = [];
      }
    }
  }
}
