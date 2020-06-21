import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid blue',
        margin: '15px 0 0 0'
    }
    return <input type={"text"}
                  style={inputStyle}
                  onChange={props.changed}
                  value={props.currentName}/>;
}

export default userInput;