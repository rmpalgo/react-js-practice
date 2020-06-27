import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    btnClass = classes.Red
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
             <h1>React app ES6</h1>
             <p className={assignedClasses.join(' ')}>This is really cool!</p>
             <button className={classes.Cockpit}
                onClick={props.changed}
             >Switch Button</button>
        </div>
    );
};


export default cockpit;