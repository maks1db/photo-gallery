import React from 'react';
import deleteProps from 'deleteProps.js';
import MainInput from './MainInput.jsx';

export default (props) => (
    <MainInput 
        control="input"
        {...props}
    />
);