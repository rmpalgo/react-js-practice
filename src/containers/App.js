import React, { Component } from 'react';
import classes from '../components/Persons/Person/Person.module.css';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
    constructor(props) {
        super(props);
        console.log("1. [App.js] constructor is being executed...")
    }


    state = {
        persons: [
            { id: '123sdf', name: 'Brownie', breed: 'chihuaha'},
            { id: '2343', name: "Cinnamon", breed: 'chihuaha'},
            { id: '123ds', name: "Fox Lady", breed: 'chihuaha'}
        ],
        otherState: 'other state',
        showPersons: false,
        showCockpit: true
    }

    static getDerivedStateFromProps(props, state) {
        console.log('2. [App.js] getDerivedStateFromProps is executed...', props);
        return state;
    }

    componentDidMount() {
        console.log('4. [App.js ] componentDidMount is executed...');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log("5. Update: internal update [App.js] is executed...");
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
        console.log('3. [App.js] render() is executed...')
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
                        <button onClick={() => {
                            this.setState({showCockpit: false})
                        }}>Remove Cockpit</button>
                        {this.state.showCockpit ?
                        <Cockpit
                            title={this.props.title}
                            showPersons={this.state.showPersons}
                            persons={this.state.persons}
                            changed={this.togglePersonsHandler}
                        /> : null }
                        {persons}
                    </div>
                </div>

        );
    }
}

export default App;