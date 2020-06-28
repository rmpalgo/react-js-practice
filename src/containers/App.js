import React, { Component } from 'react';
import classes from '../components/Persons/Person/Person.module.css';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


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

            persons = <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />;

        }

        return (
                <div className="App">
                    <div>
                        <Cockpit
                            title={this.props.title}
                            showPersons={this.state.showPersons}
                            persons={this.state.persons}
                            changed={this.togglePersonsHandler}
                        />
                        {persons}
                    </div>
                </div>

        );
    }
}

export default App;