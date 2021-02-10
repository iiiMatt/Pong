class Pong {
    constructor() {
        this.player1 = new Barrier();
        this.player2 = new Barrier(1);
        this.ball = new Ball();
    }


    play() {
        
        this.player1.bot(this.ball.pos.y);
        this.player2.player();

        this.player1.update();
        this.player2.update();

        this.player1.show();
        this.player2.show();

        this.ball.checkPlayer1(this.player1);
        this.ball.checkPlayer2(this.player2);
        this.ball.update();
        this.ball.show();
    }
}