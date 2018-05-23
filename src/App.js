import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './componets/Layout';
import Packs from './componets/Packs';
import InputArea from './componets/InputArea';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Protocol 0</h1>
        </header>
        <div className="container">
          <Layout />
        </div>
        <div className="col-sm-6">
          <Packs />
        </div>
        <div className="col-sm-6">
          <InputArea />
        </div>  
      </div>
    );
  }
}

export default App;
