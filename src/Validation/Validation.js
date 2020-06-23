import React from 'react';

const Validation = (props) => {
    let validationMessage = 'Text long enough!';

    if(props.length <= 5) {
        validationMessage = 'Text too short!';
    }

    return (
        <div className={"InputField"}>
            <input type="text" onChange={props.changed} value={props.currentValue}/>
            <p>{validationMessage}</p>
            <p>{props.length}</p>
        </div>
    )
}

export default Validation;