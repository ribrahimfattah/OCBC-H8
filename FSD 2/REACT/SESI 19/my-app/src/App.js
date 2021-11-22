import React, { Component} from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  title = "Welcome to React"

  constructor(){
    super()
    this.state = {
      title: "welcome to raect"
    }
  }

  changeTitle = () => {
    this.setState ({
      title: "cekkk"
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.title}</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button
            className="App-link"
            onClick={() => this.changeTitle()}
          >
            Learn React
          </button>
        </header>
      </div>
    )
  }
}

App.PropTypes = {
  
}

export default App;
