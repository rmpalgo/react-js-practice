import React, { Component } from 'react';
import classes from './Person/Person.module.css';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            { id: '123sdf', name: 'Brownie', breed: 'chihuaha'},
            { id: '2343', name: "Cinnamon", breed: 'chihuaha'},
            { id: '123ds', name: "Fox Lady", breed: 'chihuaha'}
        ],
        otherState: 'other state',
        showPersons: false
    }

    nameChangedHandler = (event, id) =>{
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    }

    deletePersonHandler = (personIndex) => {

        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const show = this.state.showPersons;
        this.setState({showPersons: !show});
    }

    render() {

        let persons = null;

        if( this.state.showPersons ) {

            persons = (
                <div >
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            breed={person.breed}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            );
        }

        const assignedClasses = [];
        if(this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if(this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
                <div className="App">
                    <div>
                        <h1>React app ES6</h1>
                        <p className={assignedClasses.join(' ')}>This is really cool!</p>
                        <button className={classes.Button} alt={this.state.showPersons}
                            onClick={this.togglePersonsHandler}
                            >Switch Button</button>
                        {persons}
                    </div>
                </div>

        );
    }
}

export default App;