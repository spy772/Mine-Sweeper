import { Board } from './Board';
import './Game.css';

export function Game() {
    return (
        <div className="game">
          <div className="game-board">
            <Board rows={50} columns={50}/>
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    )
}

