class car{
    constructor(ctx) {
        this.ctx = ctx;
		this.x = x;
		this.y = y;
        this.width = 70;
        this.height = 120;
        this.x = (this.ctx.canvas.width /2) - this.width /2 ;
        this.y = this.ctx.canvas.height -150;
        this.img = new Image();
		this.img.src = "./images/car.png";
        this.speed = 5;
		this.vx = 0;
		this.vy = 0;
        this.isReady = false;
        this.img.onload(() => {
            this.isReady = true;

        })
		
        this.movements = {
			left: false,
			right: false,
			up: false,
			down: false
		};

    }

    draw(){
        if (this.isReady) {
			this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		}
    }
 
    isReady(){
        return this.img.isReady;
    }

    move() {
		if (this.movements.left) {
			this.vx = -this.speed;
		} else if (this.movements.right) {
			this.vx = this.speed;
		} else {
			this.vx = 0;
		}

		if (this.movements.up) {
			this.vy = -this.speed;
		} else if (this.movements.down) {
			this.vy = this.speed;
		} else {
			this.vy = 0;
		}

		this.x += this.vx;
		this.y += this.vy;

		if (this.x <= 60) {
			this.x = 60;
		} else if (this.x + this.width >= this.ctx.canvas.width) {
			this.x = this.ctx.canvas.width - this.width;
		}
        if (this.y <= 0) {
			this.y = 0;
		} else if (this.y + this.height >= this.ctx.canvas.height) {
			this.y = this.ctx.canvas.height - this.height;
		}
	}

    onKeyEvent(event) {
		const status = event.type === "keydown";

		if (event.keyCode === 37) {
			this.movements.left = status;
		} else if (event.keyCode === 39) {
			this.movements.right = status;
		} else if (event.keyCode === 38) {
			this.movements.up = status;
		} else if (event.keyCode === 40) {
			this.movements.down = status;
		}
	}
}