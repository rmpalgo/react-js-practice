import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div>
          <p>Name: {props.name}</p>
          <p>Breed: {props.breed}</p>
      </div>
    </div>
  );
}

export default App;
