import { Board } from './Board';
import './Game.css';
import { Game as Config } from './Config';
import React, { useState } from 'react';
import { isItMine } from './Utility';
import * as _ from 'lodash';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export function Game() {
  const [game, setGame] = useState(new Config('started', 10, 10, 15));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newGame = () => {
    setGame(prev => {
      return new Config('started', 10, 10, 15); 
    })
    handleClose();
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board rows={game.rows} columns={game.columns} tiles={game.tiles} squareEvent={wasClicked} />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Game Over!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to start a new game?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No thanks
          </Button>
          <Button onClick={newGame} color="primary" autoFocus>
            Yes, I would love to!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )

  function wasClicked(x, y, isLeftClick) {

    if (isLeftClick) {
      if (isItMine(game.mines, x, y)) {
        setGame(prev => {
          prev.mined(x, y)
          return _.cloneDeep(prev);
        });

        setGame(prev => {
          prev.status = 'game over';
          return _.cloneDeep(prev);
        });
        handleClickOpen();
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
