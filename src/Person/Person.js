import React from 'react';
//import './Person.css';
import styled from 'styled-components';

const StyleDiv =   styled.div`
                width: 60%;
                margin: 15px auto;
                border: 1px solid whitesmoke;
                box-shadow: 0 2px 3px lightgrey;
                padding: 16px;
                text-align: center;

                @media (min-width: 500px) {
                    {
                         width: 450px;
                     }
                }
            `;



const person = (props) => {

    //JSX is being returned
    return (
        //<div className={"Person"} style={style}>
        <StyleDiv >
            <p onClick={props.click}>I'm {props.name} and I am {Math.floor(Math.random() * 100)} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyleDiv>
        //</div>
    )
}

export default person;