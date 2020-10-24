function Player() {
    this.x = 450;
    this.y = 20;
    this.show = function() {
        if (player.painter()) {
            fill('white');
            stroke('white');
            rect(this.x, this.y, 10, 10);
            fill('orange');
            stroke('orange');
            rect(this.x+3, this.y+3, 4, 4);
        } else {
            fill('orange');
            stroke('orange');
            rect(this.x, this.y, 10, 10);
            fill('white');
            stroke('white');
            rect(this.x+3, this.y+3, 4, 4);
        }
    }
    this.painter = function() {
        if ((this.x-30)/10+(this.y-30)/10*85 >= 0 && (this.x-30)/10+(this.y-30)/10*85 < voter.length) {
            if (voter[(this.x-30)/10+(this.y-30)/10*85]!=1)
            if (voter[(this.x-30)/10+(this.y-30)/10*85].paint()){
                f = true;
                coin = 0;
                return true;
            }
        }
        return false;
    }
    this.go = function() {
        if (player.painter() && stpoint!=1) {
            stpos = pos;
            stpoint = 1;
            finpoint = 0;
            sx = player.x;
            sy = player.y;
        }
        if (!player.painter() && finpoint!=1) {
            finpos = pos;
            finpoint = 1;
            stpoint = 0;
            fx = player.x;
            fy = player.y;
        }
        if (keyCode === LEFT_ARROW && (pos != 'r' || !player.painter())) {
            pos = 'l';
            f=false;
            coin = 1;
            keyCode = 0;
        } else if (keyCode === RIGHT_ARROW && (pos != 'l' || !player.painter())) {
            pos = 'r';
            f=false;
            coin = 1;
            keyCode = 0;
        } else if (keyCode === UP_ARROW && (pos != 'd' || !player.painter())) {
            pos='u';
            f=false;
            coin = 1;
            keyCode = 0;
        } else if (keyCode === DOWN_ARROW && (pos != 'u' || !player.painter())) {
            pos='d';
            f=false;
            coin = 1;
            keyCode = 0;
        }
        player.painter()
        if (f && !player.painter() && coin == 0){
            for (j=0; j<44; j++) {
                for (i=0; i<85; i++) {
                    if (trg.find((el) => voter[i+j*85].x == el[0] && voter[i+j*85].y == el[1])) {
                        polo.push([i, j, trg.find((el) => voter[i+j*85].x == el[0] && voter[i+j*85].y == el[1])[2]]);
                        if (j>0)
                        if (trg.find((el) => voter[i+(j-1)*85].x == el[0] && voter[i+(j-1)*85].y == el[1])) {
                            if (trg.find((el) => voter[i+(j-1)*85].x == el[0] && voter[i+(j-1)*85].y == el[1]))
                                polo.push([i, j, trg.find((el) => voter[i+(j-1)*85].x == el[0] && voter[i+(j-1)*85].y == el[1])[2]]);
                        }
                        if (j<43)
                        if (trg.find((el) => voter[i+(j+1)*85].x == el[0] && voter[i+(j+1)*85].y == el[1])) {
                            if (trg.find((el) => voter[i+(j+1)*85].x == el[0] && voter[i+(j+1)*85].y == el[1])) 
                            polo.push([i, j, trg.find((el) => voter[i+(j+1)*85].x == el[0] && voter[i+(j+1)*85].y == el[1])[2]]);
                        }
                    }
                }
            }
            if (!((stpos == 'd' && finpos == 'l') || (stpos == 'd' && finpos == 'd') || (stpos == 'r' && finpos == 'd') 
            || (stpos == 'r' && finpos == 'r') || (stpos == 'u' && finpos == 'r') || (stpos == 'u' && finpos == 'u') 
            || (stpos == 'l' && finpos == 'u') || (stpos == 'l' && finpos == 'l') || (stpos == 'd' && finpos == 'u' && sx > fx)
            || (stpos == 'u' && finpos == 'd' && sx < fx) || (stpos == 'r' && finpos == 'l' && sy < fy) || (stpos == 'l' && finpos == 'r' && sy > fy))) {
                for (i=0; i<polo.length; i++){
                    if (polo[i][2] == 'd') {
                        polo[i][2] = 'u';
                        continue;
                    }
                    if (polo[i][2] == 'u') {
                        polo[i][2] = 'd';
                        continue;
                    }
                    if (polo[i][2] == 'r') {
                        polo[i][2] = 'l';
                        continue;
                    }
                    if (polo[i][2] == 'l') {
                        polo[i][2] = 'r';
                        continue;
                    }
                }
            }
            let s;
            for (i=0; i<polo.length; i++){
                s=0;
                if (polo[i][2] == 'd') {
                    for (let j=0; j<100; j++) {
                        if (polo[i][0] - j < 0 || voter[polo[i][0]-j+polo[i][1]*85] == 1){
                            break;
                        }
                        if (trg.find((el) => voter[polo[i][0]-j+polo[i][1]*85].x == el[0] &&  voter[polo[i][0]-j+polo[i][1]*85].y == el[1])) {
                            s++;
                        }
                        if (s == 2){
                            if (!ostra.find((el) => polo[i][0]-j == el[0] && polo[i][1] == el[1])){
                                ostra.push([polo[i][0]-j, polo[i][1]]);
                            }
                            break;
                        }
                        if (!ostra.find((el) => polo[i][0]-j == el[0] && polo[i][1] == el[1])){
                            ostra.push([polo[i][0]-j, polo[i][1]]);
                        }
                    }
                }
                if (polo[i][2] == 'l') {
                    for (let j=0; j<100; j++) {
                        if (polo[i][1] - j < 0  || voter[polo[i][0]+(polo[i][1]-j)*85] == 1){
                            break;
                        }
                        if (trg.find((el) => voter[polo[i][0]+(polo[i][1]-j)*85].x == el[0] && voter[polo[i][0]+(polo[i][1]-j)*85].y == el[1])) {
                            s++;
                        }
                        if (s == 2){
                            if (!ostra.find((el) => polo[i][0] == el[0] && polo[i][1]-j == el[1])){
                                ostra.push([polo[i][0], polo[i][1]-j]);
                            }
                            break;
                        }
                        if (!ostra.find((el) => polo[i][0] == el[0] && polo[i][1]-j == el[1])){
                            ostra.push([polo[i][0], polo[i][1]-j]);
                        }
                    }
                }
                if (polo[i][2] == 'u') {
                    for (let j=0; j<100; j++) {
                        if (polo[i][0]+j+polo[i][1]*85 >= voter.length || polo[i][0]+j+polo[i][1]*85 < 0 || voter[polo[i][0]+j+polo[i][1]*85] == 1){
                            break;
                        }
                        if (trg.find((el) => voter[polo[i][0]+j+polo[i][1]*85].x == el[0] && voter[polo[i][0]+j+polo[i][1]*85].y == el[1])) {
                            s++;
                        }
                        if (s == 2){
                            if (!ostra.find((el) => polo[i][0]+j == el[0] && polo[i][1] == el[1])){
                                ostra.push([polo[i][0]+j, polo[i][1]]);
                            }
                            break;
                        }
                        if (!ostra.find((el) => polo[i][0]+j == el[0] && polo[i][1] == el[1])){
                            ostra.push([polo[i][0]+j, polo[i][1]]);
                        }
                    }
                }
                if (polo[i][2] == 'r') {
                    for (let j=0; j<100; j++) {
                        if (polo[i][0]+(polo[i][1]+j)*85 >= voter.length || voter[polo[i][0]+(polo[i][1]+j)*85] == 1){
                            break;
                        }
                        if (trg.find((el) =>  voter[polo[i][0]+(polo[i][1]+j)*85].x == el[0] &&  voter[polo[i][0]+(polo[i][1]+j)*85].y == el[1])) {
                            s++;
                        }
                        if (s == 2){
                            if (!ostra.find((el) => polo[i][0] == el[0] && polo[i][1]+j == el[1])){
                                ostra.push([polo[i][0], polo[i][1]+j]);
                            }
                            break;
                        }
                        if (!ostra.find((el) => polo[i][0] == el[0] && polo[i][1]+j == el[1])){
                            ostra.push([polo[i][0], polo[i][1]+j]);
                        }
                    }
                }
            }
            coin = 1;
            let cox = enemy.x;
            let coy = enemy.y;
            let fl = false;
            for (let h=0; h<ostra.length; h++) {
                if (cox == ostra[h][0]*10+30 && coy == ostra[h][1]*10+30) {
                    fl=true;
                }
            }
            if (!fl) {
                for (let h=0; h<ostra.length; h++){
                    voter[ostra[h][0]+ostra[h][1]*85] = 1;
                }
            } else {
                for (let h=0; h<ostra.length; h++){
                    voter[ostra[h][0]+ostra[h][1]*85].invis = 2;
                }
                for (i=0; i<polo.length; i++) {
                    voter[polo[i][0]+polo[i][1]*85].invis = 0;
                }
                for (j=3; j<47; j++) {
                    for (i=3; i<88; i++){
                        if (voter[(i-3)+(j-3)*85].invis == 0) {
                            voter[(i-3)+(j-3)*85] = 1;
                        } else if (voter[(i-3)+(j-3)*85].invis == 2) {
                            voter[(i-3)+(j-3)*85].invis = 0;
                        }
                    }
                }
            }
            ostra = [];
        }

        if (!(f && !player.painter())){
        if (pos == 'l'){
            player.x - 10 >= 0 ? player.x -= 10 : true;
            if (player.painter()) {
                trg.push([player.x, player.y, 'l']);
            }
        }
        if (pos == 'r'){
            player.x + 10 < 910 ? player.x += 10 : true;
            if (player.painter()) {
                trg.push([player.x, player.y, 'r']);
            }
        }
        if (pos == 'u'){
            player.y - 10 >= 0 ? player.y -= 10 : true;
            if (player.painter()) {
                trg.push([player.x, player.y, 'u']);
            }
        }
        if (pos == 'd'){
            player.y + 10 < 500 ? player.y += 10 : true;
            if (player.painter()) {
                trg.push([player.x, player.y, 'd']);
            }
        }
        }
    }
}
