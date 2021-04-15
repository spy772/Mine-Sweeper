import { Board } from './Board';
import './Game.css';
import { Game as Config } from './Config';
import React, { useState } from 'react';
import { isItMine } from './Utility';
import * as _ from 'lodash';

export function Game() {
  const [game, setGame] = useState(new Config('started', 45, 45, 15));
    return (
        <div className="game">
          <div className="game-board">
            <Board rows={ game.rows } columns={ game.columns } tiles={ game.tiles } squareEvent={ wasClicked }/>
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    )

    function wasClicked(x, y, isLeftClick) {
      setGame(prev => {
        const before = JSON.stringify(prev);
        
        if (isLeftClick) {
          if (isItMine(prev.mines, x, y)) {
            prev.mined(x, y)
          } else {
            prev.click(x, y)
          }
        } else {
          prev.flag(x, y)
         // console.log('flagged x:' + x + ' y:' + y)
        }
        const now = JSON.stringify(prev);
        // console.log('prev same as before: ' + (before === now));
        // console.log(prev.tiles)
        return _.cloneDeep(prev);
      });
      // console.log(x, y);
     /* if (isItMine(mines, x, y)) {
        console.log('boom');
      } else {
        console.log('continue');
    } */

  }
}
