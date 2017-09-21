import React from 'react';

export default (props) => (
    <div className="form-group">
        <label>{props.label}:</label>
        <input type="text" className="form-control" {...props}/>
    </div>
);