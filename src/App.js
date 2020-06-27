import React, { Component } from 'react';
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

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'pink',
                color: 'black'
            }
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
                            breed={person.breed}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            );
            // style.backgroundColor = 'red';
            // style[':hover'] =  {
            //     backgroundColor: 'salmon',
            //         color: 'black'
            // }
        }

        const classes = [];
        if(this.state.persons.length <= 2) {
            classes.push('red');
        }
        if(this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            //JSX

                <div className="App">
                    <div>
                        <h1>React app ES6</h1>
                        <p className={classes.join(' ')}>This is really cool!</p>
                        <div alt={this.state.showPersons}
                            onClick={this.togglePersonsHandler}
                            >Switch Button</div>
                        {persons}
                    </div>
                </div>

        );
        // ^ code in the return gets compiled to code below:
        // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Is this Rendering on the page?'));
    }
}

export default App;