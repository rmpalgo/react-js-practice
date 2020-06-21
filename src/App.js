import React, { Component } from 'react';
import UserOutput from './Input/UserOutput'
import './App.css';


class App extends Component {
  render() {

    return (
        <div className="App">
          <div>
            <UserOutput />
          </ div>
        </div>
    );
  }
}

export default App;
