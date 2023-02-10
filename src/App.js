import './App.css';
import Experiment from './ReactEvents/Experiment';
import WiseSquare from './ReactEvents/WiseSquare';
import WiseSquareWithProps from './ReactEvents/WiseSquareWithProps';

function App() {
  return (
    <div className="App">
    <h1>React Events</h1>
      <WiseSquare/>
      <WiseSquareWithProps/>
      <Experiment/>
    </div>
  );
}

export default App;
