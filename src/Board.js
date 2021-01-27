import './Board.css';
import { Square } from './Square';

function Row(props) {
    var row = [];
    for (var i = 0; i < props.cells; i++) {
        row.push(<Square />);
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