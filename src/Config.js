export class Game {

    constructor(status, rows, columns) {
        this._status = status;
        this._rows = rows;
        this._columns = columns;
    }

    get status() {
        return this._status;
    }

    set status(stat) {
        this._status = stat;
    }

    get rows() {
        return this._rows;
    }
    set rows(row) {
        this._rows = row;
    }

    get columns() {
        return this._columns;
    }

    set columns(column) {
        this._columns = column;
    }
}

