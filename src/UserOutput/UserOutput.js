import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className={"UserOutput"}>
            <p>{props.override} username: {props.username}</p>
        </div>
    )
}

export default userOutput;