const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 25;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var snake;

(function setup() {
  snake = new Snake();
  fruit = new Fruit();
  button1 = new Button1();
  button2 = new Button2();
  button3 = new Button3();
  button4 = new Button4();
  button5 = new Button5();
  fruit.pickLocation(0);

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation(snake.lastEatenFruit);
    }

    snake.checkCollision();
    document.querySelector('.score').innerText = snake.total;
    document.querySelector('.score2').innerText = "$"+Math.round(snake.total2);
    document.getElementById("multipliers1").innerHTML = snake.multi
    document.getElementById("multipliers2").innerHTML = Math.round((((snake.multi2-1)*snake.total)+1)*100)/100;
    document.getElementById("multipliers3").innerHTML = Math.round((Math.pow((snake.multi3+1), snake.total))*200)/200;
    document.getElementById("multiplierstotal").innerHTML = "x"+Math.round(((((snake.multi2-1)*snake.total)+1)*snake.multi)*100)/100

    button1.discountLevel = button3.level
    button2.discountLevel = button3.level
    button4.discountLevel = button3.level
    button5.discountLevel = button3.level

    if (button4.level > (fruit.x.length - 1)) {
      fruit.pickLocation(fruit.x.length);
    }
  }, 100);
}());

window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}));

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
