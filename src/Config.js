export class Game {

    constructor(status, rows, columns, minesPercent) {
        this._status = status;
        this._rows = rows;
        this._columns = columns;
        this._minesPercent = minesPercent
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
        // for (let i = 0; i < )
    }
}

