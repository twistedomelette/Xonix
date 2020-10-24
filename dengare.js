function Enemy() {
    this.x = Math.trunc(Math.random()*85)*10+30;
    this.y = Math.trunc(Math.random()*44)*10+30;
    tra = Math.trunc(Math.random()*10)%4
    this.show = function() {
        fill('white');
        stroke('purple');
        ellipse(this.x+5, this.y+5, 10, 10);
    }
    this.pai = function(x, y) {
        if ((x-30)/10+(y-30)/10*85 >= 0 && (x-30)/10+(y-30)/10*85 < voter.length) {
            if (voter[(x-30)/10+(y-30)/10*85] !== 'undefined'){
                return true;
            }
        }
        return false;
    }
    this.go = function() {
        if (tra == 0) {
            if (trg.find((el) => el[0] == this.x+10 && el[1] == this.y-10) && voter[(this.x+10)/10-3+((this.y-10)/10-3)*85] != 1) {
                lose = 1;
            }
            if (this.pai(this.x+10, this.y-10) && this.x+10 <= 870 && !trg.find((el) => el[0] == this.x+10 && el[1] == this.y-10)) {
                this.x += 10;
                this.y -= 10;
            } else {
                if (this.pai(this.x+10, this.y+10) && this.x+10 <= 870 && !trg.find((el) => el[0] == this.x+10 && el[1] == this.y+10)) {
                    tra = 1;
                } else {
                    tra = 3;
                }
            }
        }
        if (tra == 1) {
            if (trg.find((el) => el[0] == this.x+10 && el[1] == this.y+10) && voter[(this.x+10)/10-3+((this.y+10)/10-3)*85] != 1) {
                lose = 1;
            }
            if (this.pai(this.x+10, this.y+10) && this.x+10 <= 870 && !trg.find((el) => el[0] == this.x+10 && el[1] == this.y+10)) {
                this.x += 10;
                this.y += 10;
            } else {
                if (this.pai(this.x-10, this.y+10) && this.x-10>=30 && !trg.find((el) => el[0] == this.x-10 && el[1] == this.y+10)) {
                    tra = 2;
                } else {
                    tra = 0;
                }
            }
        }
        if (tra == 2) {
            if (trg.find((el) => el[0] == this.x-10 && el[1] == this.y+10) && voter[(this.x-10)/10-3+((this.y+10)/10-3)*85] != 1) {
                lose = 1;
            }
            if (this.pai(this.x-10, this.y+10) && this.x-10>=30 && !trg.find((el) => el[0] == this.x-10 && el[1] == this.y+10)) {
                this.x -= 10;
                this.y += 10;
            } else {
                if (this.pai(this.x-10, this.y-10) && this.x-10>=30 && !trg.find((el) => el[0] == this.x-10 && el[1] == this.y-10)) {
                    tra = 3;
                } else {
                    tra = 1;
                }
            }
        }
        if (tra == 3) {
            if (trg.find((el) => el[0] == this.x-10 && el[1] == this.y-10) && voter[(this.x-10)/10-3+((this.y-10)/10-3)*85] != 1) {
                lose = 1;
            }
            if (this.pai(this.x-10, this.y-10) && this.x-10>=30 && !trg.find((el) => el[0] == this.x-10 && el[1] == this.y-10)) {
                this.x -= 10;
                this.y -= 10;
            } else {
                if (this.pai(this.x+10, this.y-10) && this.x+10 <= 870 && !trg.find((el) => el[0] == this.x+10 && el[1] == this.y-10)) {
                    tra = 0;
                } else {
                    tra = 2;
                }
            }
        };
    }
}