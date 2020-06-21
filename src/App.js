import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


//class based components
class App extends Component {
    state = {
        persons: [
            { name: 'Brownie', breed: 'chihuaha'},
            { name: "Cinnamon", breed: 'chihuaha'},
            { name: "Fox Lady", breed: 'chihuaha'}
        ],
        otherState: 'other state',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        //console.log('Was clicked!');
        //Don't access and alter state like this: this.state.persons[0].name = "Milo";
        this.setState({
            persons: [
                {name: newName, breed: "Warlock"},
                {name: "Ruchie", breed: "Warrior"},
                {name: "Ron", breed: "Templar"}
            ]
        });
    };

    nameChangedHandler = (event) =>{
        this.setState({
            persons: [
                {name: "Rhean", breed: "Warlock"},
                {name: event.target.value, breed: "Warrior"},
                {name: "Ron", breed: "Templar"}
            ]
        });
    }

    //declaring with arrow function allows that the 'this' keyword returns to this class
    togglePersonsHandler = () => {
        const show = this.state.showPersons;
        this.setState({showPersons: !show});
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            //JSX
            <div className="App">
                <div>
                    <h1>React app ES6</h1>
                    <p>This is really cool!</p>
                    <button
                        style={style}
                        onClick={this.togglePersonsHandler}
                        >Switch Button</button>
                    { //can only use ternary, if block statements do not work
                        this.state.showPersons === true ?
                            <div >
                            <Person
                                name={this.state.persons[0].name}
                                breed={this.state.persons[0].breed}>Hobby is eating snacks!</Person>
                            <Person
                                name={this.state.persons[1].name}
                                breed={this.state.persons[1].breed}
                                //bind syntax better performance
                                click={this.switchNameHandler.bind(this, 'Lucy')}
                                changed={this.nameChangedHandler}>Hobby is chasing after squirrels.</Person>
                            <Person
                                name={this.state.persons[2].name}
                                breed={this.state.persons[2].breed}>Hobby is teasing Mia.</Person>
                        </div>: null
                    }
                </div>
            </div>
        );
        // ^ code in the return gets compiled to code below:
        // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Is this Rendering on the page?'));
    }
}
export default App;



//hooks equivalent
/*
const App = props => {
    //useState is a Hook since this is a functional component you can't just add state, import useState instead as a Hook to setState
   const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: "Brownie", breed: "chihuaha"},
            { name: "Cinnamon", breed: "chihuaha"},
            { name: "Fox Lady", breed: "chihuaha"}
        ],
        otherState: 'other value'
    });

    const [otherState, setOtherState] = useState('some other value');
    console.log(otherState, setOtherState);

    const switchNameHandler = () => {
        //console.log('Was clicked!');
        //Don't access and alter state like this: this.state.persons[0].name = "Milo";
        setPersonsState({
            persons: [
                {name: "Rhean", breed: "Warlock"},
                {name: "Ruchie", breed: "Warrior"},
                {name: "Ron", breed: "Templar"}
            ]
        });
    };
        return (
            //JSX
            <div className="App">
                <div>
                    <h1>React app ES6</h1>
                    <p>This is really cool!</p>
                    <button onClick={switchNameHandler}>Switch Button</button>
                    <Person name={personsState.persons[0].name} breed={personsState.persons[0].breed}>Hobby is eating snacks!</Person>
                    <Person name={personsState.persons[1].name} breed={personsState.persons[1].breed}>Hobby is chasing after squirrels.</Person>
                    <Person name={personsState.persons[2].name} breed={personsState.persons[2].breed}>Hobby is teasing Mia.</Person>
                </div>
            </div>
        );
        // ^ code in the return gets compiled to code below:
        // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Is this Rendering on the page?'));
}
 */

// export default App;