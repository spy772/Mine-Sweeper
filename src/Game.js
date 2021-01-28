import { Board } from './Board';
import './Game.css';
import { Game as Config } from './Config';
import React, { useState } from 'react';

export function Game() {
  const [game, setGame] = useState(new Config('started', 45, 45));
    return (
        <div className="game">
          <div className="game-board">
            <Board rows={ game.rows } columns={ game.columns }/>
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    )
}

