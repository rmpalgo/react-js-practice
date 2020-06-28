import React, { Component } from 'react';
import Person from "./Person/Person";

class Persons extends Component {

    render() {

        return(
        this.props.persons.map((person, index) => {
            console.log('3a. [Persons.js] After render, children elements executed upon activation...')
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                breed={person.breed}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
        }));
    }
}


export default Persons;