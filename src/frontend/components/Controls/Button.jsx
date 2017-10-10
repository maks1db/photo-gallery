import React from 'react';
import deleteProps from 'deleteProps.js';
import ClassName from 'className.js';

export default (props) => (
    <button type="button" 
        {...ClassName({}, `btn btn-${props.option} ${props.className ? props.className : ''}`)}
        {...deleteProps(props, ['option', 'mini', 'className'])}
    >{props.children}</button>
);