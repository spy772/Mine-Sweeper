export function isItMine(mines, x, y) {
    for (let i = 0; i < mines.length; i++) {
        if (mines[i].x === x && mines[i].y === y) {
            return true;
        } 
    }
    return false;
} 