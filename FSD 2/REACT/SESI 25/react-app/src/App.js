import logo from './logo.svg';
import { Outlet } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import { decrement, increment, setCounter } from './store/actions';

function App() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const incrementCounter = () => { dispatch(increment()) }
  const decrementCounter = () => { dispatch(decrement()) }
  const customCounter = (value = 20) => { dispatch(setCounter(state.counter + value)) }

  return (
    <div className="App" >
      <div>
        <h3>Counter Time!</h3>
        <h3>{state.counter}</h3>
        <button onClick={decrementCounter}>Sbstract</button>
        <button onClick={incrementCounter}>Add</button>
        <button onClick={() => { customCounter() }}>Add 20</button>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
