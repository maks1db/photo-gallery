import React from 'react';
import MainInput from './MainInput.jsx';

export default (props) => (
    <div className="form-group">
        <label>{props.label}:</label>
        <MainInput 
            control="textarea"
            type="text" 
            className="form-control" 
            {...props}
        />
    </div>
);