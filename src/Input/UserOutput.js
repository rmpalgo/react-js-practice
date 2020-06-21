import React from 'react';

const userOutput = (props) => {
    return(
        <div>
            <p>Ron's favorite fruit is {props.fruitOne}</p>
            <p>Milo's favorite fruit is {props.fruitTwo}</p>
        </div>
    )
}

export default userOutput;