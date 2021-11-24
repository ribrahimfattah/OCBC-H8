import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';


function App() {

  const [placeholder, setPlaceholder] = useState('hi');

  useEffect(() => {
    fetch('/hello')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setPlaceholder(data.result)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{placeholder}</h1>
      </header>
    </div>
  );
}

export default App;
