import { isItMine } from './Utility';

export class Game {

    constructor(status, rows, columns, minesPercent) {
        this._status = status;
        this._rows = rows;
        this._columns = columns;
        this._minesPercent = minesPercent;
        this.autoMinePlace();
        this.tileStatus();
    }

    get status() {
        return this._status;
    }

    set status(status) {
        this._status = status;
    }

    get rows() {
        return this._rows;
    }
    set rows(rows) {
        this._rows = rows;
    }

    get columns() {
        return this._columns;
    }

    set columns(columns) {
        this._columns = columns;
    }

    get minesPercent() {
        return this._minesPercent;
    }

    set minesPercent(minesPercent) {
        this._minesPercent = minesPercent;
    }

    autoMinePlace() {
        this._minesTotal = this._rows * this._columns * (this._minesPercent / 100);
        this._mines = [];
        for (let i = 0; i < this._minesTotal; i++) {
            var minesCoords = {
                x: Math.floor(Math.random() * this._rows),
                y: Math.floor(Math.random() * this._columns)
            }
            this._mines.push(minesCoords);
        }
    }

    get mines() {
        return this._mines;
    }


    tileStatus() {
        this._tiles = []; 
        for (let i = 0; i < this._rows; i++) {
            this._tiles.push([]);
            for (let s = 0; s < this._columns; s++) {
                this._tiles[i].push('not clicked');
            }
        }
       // console.log(this._tiles);
    };

    get tiles() {
        return this._tiles;
    };

    click(x, y) {
            this._tiles[x][y] = 'clicked';
    };

    flag(x, y) {
        this._tiles[x][y] = 'flagged';
    };

    mined(x, y) {
        this._tiles[x][y] = 'mined';
    };

    calculate(x, y) {
        let counter = 0;

        if (x != 0) {
            if (isItMine(this._mines, x-1, y-1)) {
                counter++;
            } 
            if (isItMine(this._mines, x-1, y)) {
                counter++;
            } 
            if (isItMine(this._mines, x-1, y+1)) {
                counter++;
            } 
        }
        
        if (x != this._rows) {
            if (isItMine(this._mines, x+1, y-1)) {
                counter++;
            } 
            if (isItMine(this._mines, x+1, y)) {
                counter++;
            } 
            if (isItMine(this._mines, x+1, y+1)) {
                counter++;
            } 
        }
        
        if (y != 0) {
            if (isItMine(this._mines, x-1, y-1)) {
                counter++;
            } 
            if (isItMine(this._mines, x, y-1)) {
                counter++;
            } 
            if (isItMine(this._mines, x+1, y-1)) {
                counter++;
            } 
        }
        
        if (y != this._columns) {
            if (isItMine(this._mines, x-1, y+1)) {
                counter++;
            } 
            if (isItMine(this._mines, x, y+1)) {
                counter++;
            } 
            if (isItMine(this._mines, x+1, y+1)) {
                counter++;
            } 
        }
        console.log(counter);
    };
}; 
