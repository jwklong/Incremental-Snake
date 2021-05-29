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
  fruit.pickLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
    }

    snake.checkCollision();
    document.querySelector('.score')
      .innerText = snake.total;
    document.querySelector('.score2')
      .innerText = snake.total2;
  }, 200);
}());

window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}));
