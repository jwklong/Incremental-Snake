function Button1() {
    this.cost = 12;
    this.level = 0;
    this.costOutput = 12;
    this.discountLevel = 0;
    window.setInterval(() => {
        this.costOutput = Math.round(this.cost * Math.pow(0.6,this.discountLevel));
        this.costinfo = document.getElementById('button1cost');
        this.costinfo.innerText = "$"+this.costOutput;
        document.getElementById('button1current').innerText = "x"+snake.multi;
        document.getElementById('button1after').innerText = "x"+(snake.multi + 1);

        if (snake.total2 >= this.costOutput) {
            this.costinfo.parentElement.classList.add("canBuy");
            this.costinfo.parentElement.classList.remove("cantBuy");
        }
        else {
            this.costinfo.parentElement.classList.add("cantBuy");
            this.costinfo.parentElement.classList.remove("canBuy");
        }
    }, 1000/30)
    this.buy = function() {
        if (snake.total2 >= this.costOutput) {
            snake.total2 -= this.costOutput
            this.cost *= 1.2;
            this.level += 1;
            snake.multi = (this.level + 1);
        }
    }
}

function Button2() {
    this.cost = 26;
    this.level = 0;
    this.costOutput = 26;
    this.discountLevel = 0;
    window.setInterval(() => {
        this.costOutput = Math.round(this.cost * Math.pow(0.6,this.discountLevel));
        this.costinfo = document.getElementById('button2cost');
        this.costinfo.innerText = "$"+this.costOutput;
        document.getElementById('button2current').innerText = "x"+Math.round(((snake.multi2-1)+1)*100)/100;
        document.getElementById('button2after').innerText = "x"+Math.round((((snake.multi2+0.01)-1)+1)*100)/100;

        if (snake.total2 >= this.costOutput) {
            this.costinfo.parentElement.classList.add("canBuy");
            this.costinfo.parentElement.classList.remove("cantBuy");
        }
        else {
            this.costinfo.parentElement.classList.add("cantBuy");
            this.costinfo.parentElement.classList.remove("canBuy");
        }
    }, 1000/30)
    this.buy = function() {
        if (snake.total2 >= this.costOutput) {
            snake.total2 -= this.costOutput;
            this.cost *= 1.3;
            this.level += 1;
            snake.multi2 = ((this.level * 0.01) + 1);
        }
    }
}

function Button3() {
    this.cost = 400;
    this.level = 0;
    window.setInterval(() => {
        this.costinfo = document.getElementById('button3cost');
        this.costinfo.innerText = "$"+Math.round(this.cost);
        document.getElementById('button3current').innerText = (100*Math.pow(0.6,this.level)).toFixed(2)+"%";
        document.getElementById('button3after').innerText = (100*Math.pow(0.6,this.level+1)).toFixed(2)+"%";

        if (snake.total2 >= Math.round(this.cost)) {
            this.costinfo.parentElement.classList.add("canBuy");
            this.costinfo.parentElement.classList.remove("cantBuy");
        }
        else {
            this.costinfo.parentElement.classList.add("cantBuy");
            this.costinfo.parentElement.classList.remove("canBuy");
        }
    }, 1000/30)
    this.buy = function() {
        if (snake.total2 >= Math.round(this.cost)) {
            snake.total2 -= this.cost;
            this.level += 1;
            this.cost *= 2;
        }
    }
}

function Button4() {
    this.cost = 500;
    this.level = 0;
    this.costOutput = 500;
    this.discountLevel = 0;
    window.setInterval(() => {
        this.costOutput = Math.round(this.cost * Math.pow(0.6,this.discountLevel));
        this.costinfo = document.getElementById('button4cost');
        this.costinfo.innerText = "$"+this.costOutput;
        document.getElementById('button4current').innerText = this.level+1;
        document.getElementById('button4after').innerText = this.level+2;

        if (snake.total2 >= this.costOutput) {
            this.costinfo.parentElement.classList.add("canBuy");
            this.costinfo.parentElement.classList.remove("cantBuy");
        }
        else {
            this.costinfo.parentElement.classList.add("cantBuy");
            this.costinfo.parentElement.classList.remove("canBuy");
        }
    }, 1000/30)
    this.buy = function() {
        if (snake.total2 >= this.costOutput) {
            snake.total2 -= this.costOutput;
            this.level += 1;
            this.cost *= 5;
        }
    }
}

function Button5() {
    this.cost = 1000;
    this.level = 0;
    this.costOutput = 1000;
    this.discountLevel = 0;
    window.setInterval(() => {
        this.costOutput = Math.round(this.cost * Math.pow(0.6,this.discountLevel));
        this.costinfo = document.getElementById('button5cost');
        this.costinfo.innerText = "$"+this.costOutput;
        document.getElementById('button5current').innerText = "x"+Math.round((snake.multi3+1)*200)/200;
        document.getElementById('button5after').innerText = "x"+Math.round(((snake.multi3+0.005)+1)*200)/200;

        if (snake.total2 >= this.costOutput) {
            this.costinfo.parentElement.classList.add("canBuy");
            this.costinfo.parentElement.classList.remove("cantBuy");
        }
        else {
            this.costinfo.parentElement.classList.add("cantBuy");
            this.costinfo.parentElement.classList.remove("canBuy");
        }
    }, 1000/30)
    this.buy = function() {
        if (snake.total2 >= this.costOutput) {
            snake.total2 -= this.costOutput;
            this.cost *= 2.5;
            this.level += 1;
            snake.multi3 = (this.level * 0.005);
        }
    }
}
