import React from 'react';
import addZero from 'addZero.js';

function getName(value, names) {
    const str = value.toString();
    const l = str.length;
    
    const number = parseInt(str.substring(l-1,l));
    if (number === 0) {
        return names[2];
    }
    else if (number === 1) {
        return names[0];
    }
    else if (number > 1 && number <= 4) {
        return names[1];
    }
    else if (number > 4) {
        return names[2];
    }
}
export default ({value, names, disableZero}) => (
    <li>
        <span> {disableZero ? value : addZero(value)} </span>
        <p> {names[2]}</p>
    </li>
);