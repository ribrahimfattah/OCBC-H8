import './App.css';
// import FetchComponent from './components/FetchComponent';
import Clock from './components/Clock';
import ClockClass from './components/ClockClass';

function App() {
  return (
    <div className="App">
      <h1>Realtime CLOCK</h1>
      <hr/>
      <Clock/>
      <hr/>
      <ClockClass/>
    </div>
  );
}

export default App;
