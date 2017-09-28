import React from 'react';
import deleteProps from 'deleteProps.js';
import MainInput from './MainInput.jsx';

export default class Input extends React.Component {
    render() {

        return (
            <div className="form-group">
                <label>{this.props.label}:</label>
                <MainInput 
                    control="input"
                    type="text" 
                    className="form-control" 
                    {...this.props}
                />
            </div>
        );
    }
}