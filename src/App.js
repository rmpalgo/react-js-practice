import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }


render() {
  const charList = this.state.userInput.split('').map( (ch, index) => {
    return <Char
        character={ch}
        key={index}
        click={() => this.deleteCharHandler(index)}/>
  });
  return(
      <div className={"App"}>
        <br/>
        <Validation
            changed={this.inputChangedHandler}
            length={this.state.userInput.length}
            currentValue={this.state.userInput}/>
        {charList}
      </div>
  );

}

}


export default App;
