import React, { Component } from 'react';
import UserOutput from './Input/UserOutput'
import './App.css';


class App extends Component {
    state = {
        fruits: [
            {fruit: "Mango"},
            {fruit: "Apple"},
            {fruit: "Banana"}
        ]
    }

  render() {

    return (
        <div className="App">
          <div>
              <h1>This is an example of passing var with props</h1>
            <UserOutput
                //passing variables and displaying
                fruitOne={"Mango"}
                fruitTwo={"Apple"} />
          </ div>
            <h1>This is an example of using state and passing it to props</h1>
            <UserOutput
                fruitOne={this.state.fruits[0].fruit}
                fruitTwo={this.state.fruits[1].fruit}
            />
        </div>
    );
  }
}

export default App;
