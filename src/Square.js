import './Square.css';
import { React, useState, useEffect } from 'react';
import { logDOM } from '@testing-library/react';
import flag from './Image/flag.svg';

export function Square(props) {
  const alertMe = () => {
    if (props.mine) {
      console.log('m');
    }
  }

  useEffect(() => {
    if (props.mine) {
      console.log('M');
    }
  });

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    props.squareEvent(props.x, props.y);
  }

  // {props.mine ? 'm' : ''}

    return (
    <button
        className="square"
        onClick={handleClick}
      ><img src={flag} width="20px" height="20px" />
     
      </button>
    );
}
