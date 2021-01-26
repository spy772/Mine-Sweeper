import './App.css';
import { Square } from './Square';
import { Board } from './Board';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Board rows={5} columns={10}/>
        </div>
      </header>
    </div>
  );
}

export default App;
