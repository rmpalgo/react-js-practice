import React from 'react';
import Person from "./Person/Person";

//functional components for presentational components(although hooks can help with state) and class based for state components
const persons = (props) =>
    props.persons.map((person, index) => {
        return <Person
            click={() => props.clicked(index)}
            name={person.name}
            breed={person.breed}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}/>
    });

export default persons;