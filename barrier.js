class Barrier {
    constructor(p = 0) {
        this.w = 20;
        this.h = 100;

        if (p) {
            this.pos = createVector(350, 0);
        } else {
            this.pos = createVector(-350, 0);
        }

        this.speed = 10;
    }
    
    update() {
        if (this.pos.y - this.h / 2 < -height / 2) {
            this.pos.y = -height / 2 + this.h / 2
        }
        if (this.pos.y + this.h / 2 > height / 2) {
            this.pos.y = height / 2 - this.h / 2
        }
    }

    player() {
        this.pos.y = mouseY - height / 2;
    }

    bot(ballY) {
        let velY = ballY - this.pos.y;
        this.pos.y += velY * 0.1;
        
    }

    show() {
        fill(255);
        stroke(255);
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }
}
