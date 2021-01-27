import './App.css';
import { Square } from './Square';
import { Board } from './Board';
import { Game } from './Game';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Game/>
        </div>
      </header>
    </div>
  );
}

export default App;
