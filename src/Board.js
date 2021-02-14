import './Board.css';
import { Square } from './Square';

function isItMine(mines, x, y) {
    mines.forEach((item) => {
        if ( item.x === x && item.y === y) {
            return true;
        } 
    })

    return false;
}


function Row(props) {
    var row = [];
    for (var i = 0; i < props.cells; i++) {
        const isMine = isItMine(props.mines, 2, 3); 
        row.push(<Square mine={ isMine }/>);
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
        rows.push(<Row cells={props.columns}/>);
    }
    return <div className="board-row">{rows}</div>;
}
