import './App.css';
// import { Square } from './Square';
// import { Board } from './Board';
import { Game } from './Game';
import { React, useState, useEffect } from 'react';

/* function Array() {
   let oneToTen = [];
  let objectArray = [];
  let stringArray = ['Yes', 'No', 'Maybe'];
  for (let i = 1; i <= 10; i++) {
    oneToTen.push(i);
    for (let s = 1; s <= 10; s++) {
      var index = oneToTen.indexOf(i);

      if (index !== -1) {
        oneToTen[index] = i * s;
      }
    }
  }

  console.log(oneToTen);




  const newArray = oneToTen.filter(number => number < 5);
  console.log(newArray);
  const secondNewArray = newArray.map(ForEach);
  console.log(secondNewArray);
  secondNewArray.forEach(number => objectArray.push({
    number: number,
    strings: [...stringArray, ...oneToTen]
  }));
  console.log(objectArray);
  const foundElement = oneToTen.find(number => number >= 6)
  console.log(foundElement);
}

function ForEach(number) {
  return number + 3;
}

function MyFilter(number) {
  return number < 5;
}

const MyFilterTwo = number => number < 5; */


function App() {
  /*const [array, setArray] = useState([1, 2, 3]);

  const handleClick = () => {
    setArray((prevArray) => {
      return [...prevArray, 4]
    })
  }

  function print() {
    console.log(array)
  }

  useEffect(() => {
    console.log('I was re-rendered')
  }); */

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Game />
          {/* <p>This is my array {array}.</p>
           <button onClick={handleClick}>Filler</button>
          <button onClick={print}>Print state</button>
  <button onClick={Array}>Click me original</button>*/}
        </div>
      </header>
    </div>
  );
}

export default App;
