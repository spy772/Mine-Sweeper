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
import giphy from './Image/giphy.gif';
import gameover from './Image/game-over.jpg';
import victory from './Image/victory.gif';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function Game() {

  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const newGameParams = {
    height: 20,
    width: 20,
    percent: 15
  };

  const [game, setGame] = useState(new Config('started', newGameParams.height, newGameParams.width, newGameParams.percent));

  const [open, setOpen] = React.useState(false);

  const [openNewGame, setOpenNewGame] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newGame = () => {
    setGame(prev => {
      return new Config('started', newGameParams.height, newGameParams.width, newGameParams.percent);
    })
    handleClose();
  };

  const handleNewGame = () => {
    setOpenNewGame(true);
  };

  const handleCloseNewGame = () => {
    setOpenNewGame(false);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board rows={game.rows} columns={game.columns} tiles={game.tiles} squareEvent={wasClicked} />
        <Button onClick={handleNewGame} color="primary">
            New Game
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{game.status === 'game over' ? "Game Over!" : "Victory!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {game.status === 'game over' ? <img src={giphy} width="550px" height="275px" /> : <img src={victory} width="550px" height="413px"/>}
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

      <Dialog
        open={openNewGame}
        onClose={handleCloseNewGame}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{game.status === 'game over' ? "Game Over!" : "Victory!"}</DialogTitle>
        <DialogContent>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNewGame} color="primary">
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
          if (prev.flag(x, y)) {
            prev.status = 'victory';
            handleClickOpen();
          } 
          return _.cloneDeep(prev);
        });
      }
    }

  };
};
