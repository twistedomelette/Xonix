function Voter(x, y) {
    this.x = x;
    this.y = y;
    this.invis = 0;
    let col = 0;
    this.show = function() {
        if (this.invis == 1) {
            fill('turquoise');
            stroke('turquoise');
        } else {
        if (this.paint()){
            col = 1;
        }
        if (col == 0){
            fill('black');
            stroke('black');
        } else {
            fill('yellow');
            stroke('yellow');
        }
        }
        rect(this.x, this.y, 10, 10);
    }
    this.paint = function() {
        if (this.x == player.x && this.y == player.y){
            return true;
        }
        return false;
    }
    this.more = function() {
        if (this.x == enemy.x && this.y == enemy.y){
            return true;
        }
        return false;
    }
}

function finish() {
    let sum = 0;
    for (j=3; j<47; j++) {
        for (i=3; i<88; i++){
            if (voter[i-3+(j-3)*85].invis == 0) {
                sum++;
            }
        }
    }
    if (44*85*0.3>=sum) {
        return true;
    }
    return false;
}