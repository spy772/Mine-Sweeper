import { Board } from './Board';
import './Game.css';
import { Game as Config } from './Config';
import React, { useState } from 'react';
import { isItMine } from './Utility';
import * as _ from 'lodash';

export function Game() {
  const [game, setGame] = useState(new Config('started', 10, 10, 15));
  return (
    <div className="game">
      <div className="game-board">
        <Board rows={game.rows} columns={game.columns} tiles={game.tiles} squareEvent={wasClicked} />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )

  function wasClicked(x, y, isLeftClick) {

    if (isLeftClick) {
      if (isItMine(game.mines, x, y)) {
        setGame(prev => {
          prev.mined(x, y)
          return _.cloneDeep(prev);
        });
      } else {
        setGame(prev => {
          prev.calculate(x, y)
          return _.cloneDeep(prev);
        });
      }
    } else {
      if (game.tiles[x][y] === 'flagged') {
        setGame(prev => {
          prev.unflag(x, y)
          return _.cloneDeep(prev);
        });
      } else {
        setGame(prev => {
          prev.flag(x, y)
          return _.cloneDeep(prev);
        });        
      }
    }

  }
}
