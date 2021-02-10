// Ball class
class Ball {

    // Initializing the ball
    constructor() {
        this.pos = createVector(0, 0);

        this.speed = 5;
        this.acc = 0.01;
        if (random(1) > 0.5) {
            this.angle = random(-PI / 3, PI / 3);
        } else {
            this.angle = random(3 * PI / 3, 4 * PI / 3);
        }

        this.vel = p5.Vector.fromAngle(this.angle).mult(this.speed);
        this.r = 25;

        this.score1 = 0;
        this.score2 = 0;

        this.playing = false;
    }

    reset(p = 0) {
        this.pos = createVector(0, 0);
        if (p) {
            this.angle = random(-PI / 3, PI / 3);
        } else {
            this.angle = random(3 * PI / 3, 4 * PI / 3);
        }
        this.vel = p5.Vector.fromAngle(this.angle).mult(this.speed);
        this.playing = false;
    }

    checkWall() {
        // Ball collision check on the top and bottomn
        if (this.pos.y - this.r / 2 < -height / 2 || this.pos.y + this.r / 2 > height / 2) {
            this.vel.y *= -(1 + this.acc);
        }
        
        // Ball collision on player side
        // if (this.pos.x - this.r / 2 < -width / 2 || this.pos.x + this.r / 2 > width / 2) {
        //     this.vel.x *= -(1 + this.acc);
        // }
    }

    checkPlayer1(player) {
        let check1 = (player.pos.y - player.h / 2) < this.pos.y;
        let check2 = (player.pos.y + player.h / 2) > this.pos.y;
        let check3 = (player.pos.x + player.w / 2) > this.pos.x - this.r / 2;
        if (check1 && check2 && check3) {
            this.vel.x *= -(1 + this.acc);

            this.speed = this.vel.mag();
            this.angle = this.vel.heading();

            if (check1) {
                this.vel = p5.Vector.fromAngle(this.angle + random(-0.1, PI / 10)).mult(this.speed);
                this.pos.x = player.pos.x + player.w / 2 + this.r / 2;
            } else if (check2) {
                this.vel = p5.Vector.fromAngle(this.angle + random(-PI / 10, 0.1)).mult(this.speed);
                this.pos.x = player.pos.x + player.w / 2 + this.r / 2;
            }

        } else if (check3) {
            this.score2 += 1;
            this.reset();
        }
    }

    checkPlayer2(player) {
        let check1 = (player.pos.y - player.h / 2 - 8) < this.pos.y;
        let check2 = (player.pos.y + player.h / 2 + 8) > this.pos.y;
        let check3 = (player.pos.x - player.w / 2) < this.pos.x + this.r / 2;
        if (check1 && check2 && check3) {
            this.vel.x *= -(1 + this.acc);

            this.speed = this.vel.mag();
            this.angle = this.vel.heading();

            if (check1) {
                this.pos.x = player.pos.x - player.w / 2 - this.r / 2;
                this.vel = p5.Vector.fromAngle(this.angle - random(-0.1, PI / 6)).mult(this.speed);
            } else if (check2) {
                this.vel = p5.Vector.fromAngle(this.angle - random(-PI / 6, 0.1)).mult(this.speed);
                this.pos.x = player.pos.x - player.w / 2 - this.r / 2;
            }
        } else if (check3) {
            this.score1 += 1;
            this.reset(1);
        }
    }

    update() {
        if (mouseIsPressed) {
            this.playing = true;
        }
        if (this.playing) {
            this.checkWall();

            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;
        }
    }

    show() {
        fill(255);
        stroke(255);
        circle(this.pos.x, this.pos.y, this.r);
        textSize(50);
        text(this.score1, -width / 4 - 25, -height / 2 + 50);
        text(this.score2, width / 4 - 25, -height / 2 + 50);
    }
}
