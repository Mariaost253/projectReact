import React, { Component } from 'react';
import './App.css';
import Costumers from './Costumers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Costumers </h1>
        <hr />
        <Costumers />
      </div>
    );
  }
}

export default App;
