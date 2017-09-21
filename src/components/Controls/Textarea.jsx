import React from 'react';

export default (props) => (
    <div className="form-group">
        <label>{props.label}:</label>
        <textarea type="text" className="form-control" {...props}/>
    </div>
);