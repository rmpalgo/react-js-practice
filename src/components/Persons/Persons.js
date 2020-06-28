import React, { Component } from 'react';
import Person from "./Person/Person";

class Persons extends Component {

    render() {

        return(
        this.props.persons.map((person, index) => {
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