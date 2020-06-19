import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    render() {
        return (
            //JSX
            <div className="App">
                <div>
                    <h1>React app ES6</h1>
                    <p>This is really cool!</p>
                    <Person name={"Milo"} breed={"cattle-dog"}>Hobby is eating snacks!</Person>
                    <Person name={"Mia"} breed={"Lab"}>Hobby is chasing after squirrels.</Person>
                    <Person name={"Lucy"} breed={"Arctic-fox"}>Hobby is teasing Mia.</Person>
                </div>
            </div>
        );
        // ^ code in the return gets compiled to code below:
        // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Is this Rendering on the page?'));
    }
}

export default App;
