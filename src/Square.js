import './Square.css';
import { React, useState, useEffect } from 'react';

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
      >
        {clicked ? 
        props.mine ? 'm' : 'c'
        : null }
        
      </button>
    );
}
