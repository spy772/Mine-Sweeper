import './Board.css';
import { Square } from './Square';

function Row(props) {
    alert("Number" + JSON.stringify(props.cells));
    var row = [];
    for (var i = 0; i < props.cells; i++) {
        row.push(<Square />);
    }
    return <div>{row}</div>;
}


export function Board(props) {
    return (
        <div>
            <Row cells={props.columns}/>
        </div>
    );
}

