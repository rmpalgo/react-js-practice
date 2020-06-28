import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    useEffect( () => {
        console.log('1. Functional useEffect: [Cockpit.js] useEffect executed...');
        setTimeout(() => {
            alert('Saved data to cloud.');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect( () => {
        console.log("[Cockpit.js] 2nd useEffect");
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    });


    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if(props.personsLength <= 2) {
        assignedClasses.push(classes.Red);
    }
    if(props.personsLength <= 1) {
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


export default React.memo(Cockpit);