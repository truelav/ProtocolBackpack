import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Protocol Backpack</h1>
        </header>
        <div className="Map">
        </div>  
        <div className="Trail-list">
            <ul>
              <li> Trail1 </li>
            </ul> 
        </div>
      </div>
    );
  }
}

export default App;
