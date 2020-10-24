let voter = [];
let player;
var colored = 'black';
var pos = "?";
let speed = 10;
let a, b, c, d;
var f = false;
let clock = 0;
let enemy;
let tra;
let trg = [];
let polo = [];
let ostra = [];
let coin;
let stpos = "?";
let finsop = "?"; 
let stpoint = 0;
let finpoint = 0;
let sx=0, sy=0;
let fx=0, fy=0;
let lose = 0;

function draw() {
    background('turquoise');
    for (let i = 0; i < voter.length; i++) {
        if (voter[i] != 1) {
            voter[i].show();
        }
    }
    player.show();
    enemy.show();
    if (f && !player.painter()){
        clock = 1;
    }
    enemy.go();
    player.go();
    if (finish()) {
        fill(31);
        rect(0, 0, 910, 500);
        fill('#FFD700');
        textSize(100);
        text('You win!', 265, 270);
    }
    if (lose == 1) {
        fill(31);
        rect(0, 0, 910, 500);
        fill('#FFD700');
        textSize(100);
        text('You lose', 265, 270);
    }
}

function setup() {
    createCanvas(910, 500);
    background('turquoise');
    player = new Player();
    enemy = new Enemy();
    for (j=3; j<47; j++) {
        for (i=3; i<88; i++){
            voter.push(new Voter(i*10, j*10));
        }
    }
}
