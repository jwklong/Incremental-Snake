function Button1() {
    this.cost = 12;
    this.level = 0;
    window.setInterval(() => {
        document.getElementById('button1cost').innerText = this.cost;
        document.getElementById('button1current').innerText = "x"+snake.multi;
        document.getElementById('button1after').innerText = "x"+(snake.multi + 1);
    }, 1000/30)
    this.buy = function() {
        if (snake.total2 >= this.cost) {
            snake.total2 -= this.cost
            this.cost *= 1.2
            this.cost = Math.round(this.cost)
            this.level += 1
            snake.multi = (this.level + 1)
        }
    }
}

function Button2() {
    this.cost = 26;
    this.level = 0;
    window.setInterval(() => {
        document.getElementById('button2cost').innerText = this.cost;
        document.getElementById('button2current').innerText = "x"+Math.round((((((snake.multi2-1)*100)*snake.total)/100)+1)*100)/100;
        document.getElementById('button2after').innerText = "x"+Math.round(((((((snake.multi2+0.01)-1)*100)*snake.total)/100)+1)*100)/100;
    }, 1000/30)
    this.buy = function() {
        if (snake.total2 >= this.cost) {
            snake.total2 -= this.cost
            this.cost *= 1.3
            this.cost = Math.round(this.cost)
            this.level += 0.01
            snake.multi2 = (this.level + 1)
        }
    }
}

function Button3() {
    this.cost = 400;
    this.buyable = true;
    this.buy = function() {
        if (snake.total2 >= this.cost && this.buyable == true) {
            snake.total2 -= this.cost
            button1.cost = Math.round(button1.cost * 0.6)
            button2.cost = Math.round(button2.cost * 0.6)
            document.getElementById('button3cost').innerText = "MAX";
            document.getElementById('button3current').innerText = "60%";
            document.getElementById('button3after').innerText = "MAX";
            this.buyable = false
        }
    }
}