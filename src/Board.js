import './Board.css';
import { Square } from './Square';

function isItMine(mines, x, y) {
    for (let i = 0; i < mines.length; i++) {
        if (mines[i].x === x && mines[i].y === y) {
            return true;
        } 
    }
    return false;
}


function Row(props) {
    var row = [];
    for (var i = 0; i < props.cells; i++) {
        const isMine = isItMine(props.mines, i, props.var); 
        row.push(<Square key={i} mine={ isMine } squareEvent={ props.squareEvent } x={ i } y={ props.var }/>);
    }
    return <div className="board-row">{row}</div>;
}


export function Board(props) {
    return (
        <div>
            <Rows {...props}/>
        </div>
    );
}

function Rows(props) {
    var rows = [];
    for (var i = 0; i < props.rows; i++) {
            rows.push(<Row key={i} cells={props.columns} mines={props.mines} var={i} squareEvent={ props.squareEvent }/>);
    }
    return <div className="board-row">{rows}</div>;
}
