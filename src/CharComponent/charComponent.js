import React from 'react';

const charcterArray = (props) => {
    return (
        <div style={props.style} onClick={props.click}>
            {props.enteredChar.toUpperCase()}
        </div>
    );
}

export default charcterArray;