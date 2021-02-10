// Global variables
let game;


// Setup function
function setup() {

    // Creating the canvas
    let cnv = createCanvas(800, 500);
    game = new Pong();
}

function draw() {
    // Setting the background to black and translating to the middle
    background(0);
    translate(width / 2, height / 2);

    game.play();

}