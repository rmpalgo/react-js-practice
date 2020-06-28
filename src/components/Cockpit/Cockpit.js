import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
    })

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if(props.persons.length <= 2) {
        assignedClasses.push(classes.Red);
    }
    if(props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
             <h1>{props.title}</h1>
             <p className={assignedClasses.join(' ')}>This is really cool!</p>
             <button className={btnClass}
                onClick={props.changed}
             >Switch Button</button>
        </div>
    );
};


export default Cockpit;