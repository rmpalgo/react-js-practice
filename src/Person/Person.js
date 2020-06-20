import React from 'react';

const person = (props) => {
    //JSX is being returned
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {Math.floor(Math.random() * 100)} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;