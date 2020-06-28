import React, { Component } from 'react';
import Person from "./Person/Person";

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('1. Update: [Persons.js] getDerivedStateFromProps executed...');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("2. Update: [Persons.js] shouldComponentUpdate is executed...");
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('3. Update: [Persons.js] getSnapShotBeforeUpdate is executed...');
        return {message: 'Snapshot data from getSnapshotBeforeUpdate...'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('4. Update: [Persons.js] componentDidUpdate is executed...');
        console.log("4. Update: Inside componentDidUpdate, ", snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount...')
    }

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