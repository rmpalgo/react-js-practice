import React from 'react';
import './Person.css'

const person = (props) => {
    //JSX is being returned
    return (
        <div className={"Person"}>
            <p onClick={props.click}>I'm {props.name} and I am {Math.floor(Math.random() * 100)} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;