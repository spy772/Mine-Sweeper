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

    return (
    <button
        className="square"
        onClick={alertMe}
      >
{props.mine ? 'm' : ''}
        
      </button>
    );
}
