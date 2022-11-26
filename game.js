class Game {
    constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
		this.player = new car(this.ctx, this.canvas.width / 2, this.canvas.height - 100);
		this.bg = new Background(this.ctx);
		this.intervalId = null;
		this.obstacles = [];
		this.tick = 0;
		
	
	}

    start() {
        this.intervalId = setInterval(() => {
			this.clear();
			this.move();
			this.draw();
			
		}, 1000 / 60);
	}

    draw(){
        this.bg.draw();
		this.car.draw();
    }


    move(){
        this.bg.move();
		this.car.move();
    }

    clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
	}
}