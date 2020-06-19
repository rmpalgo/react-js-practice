import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name: 'Brownie', breed: 'chihuaha'},
            { name: "Cinnamon", breed: 'chihuaha'},
            { name: "Fox Lady", breed: 'chihuaha'}
        ]
    }
    render() {
        return (
            //JSX
            <div className="App">
                <div>
                    <h1>React app ES6</h1>
                    <p>This is really cool!</p>
                    <button>Switch Button</button>
                    <Person name={this.state.persons[0].name} breed={this.state.persons[0].breed}>Hobby is eating snacks!</Person>
                    <Person name={this.state.persons[1].name} breed={this.state.persons[1].breed}>Hobby is chasing after squirrels.</Person>
                    <Person name={this.state.persons[2].name} breed={this.state.persons[2].breed}>Hobby is teasing Mia.</Person>
                </div>
            </div>
        );
        // ^ code in the return gets compiled to code below:
        // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Is this Rendering on the page?'));
    }
}

export default App;
