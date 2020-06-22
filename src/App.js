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

    nameChangedHandler = (event) =>{
        this.setState({
            persons: [
                {name: "Rhean", breed: "Warlock"},
                {name: event.target.value, breed: "Warrior"},
                {name: "Ron", breed: "Templar"}
            ]
        });
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
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

        //preferred way of outputting conditional content using a variable and
        //including a conditional prior to returning jsx
        let persons = null;

        if( this.state.showPersons ) {
            persons = (
                <div >
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            breed={person.breed}/>
                    })}
                </div>
            )
        }

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
                    {persons}
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