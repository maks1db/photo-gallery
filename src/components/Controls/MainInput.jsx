import React from 'react';
import deleteProps from 'deleteProps.js';
import ClassName from 'className.js';
import styles from './MainInput.scss';  
import Inputmask from 'react-input-mask';

const Control = (props) => {
    if (props.control === 'input') return <Inputmask {...deleteProps(props, 'control')} />;
    else if (props.control === 'textarea') return <textarea {...deleteProps(props, 'control')} />;
    else if (props.control === 'select') return <select {...deleteProps(props, 'control')}
    />;
};

export default class Input extends React.Component {
    
    render() {
        const {
            errorMessage
        } = this.props;

        return (
            <div {...ClassName({'has-error': errorMessage !== false, 'has-feedback': errorMessage !== false},'form-group')}>
                <label>{this.props.label}:</label>
                <Control 
                    type="text" 
                    className="form-control" 
                    {...deleteProps(this.props, ['onValidation','reqired', 'errorMessage'])}
                />
                {errorMessage !== false && (<span className="glyphicon glyphicon-remove form-control-feedback"></span>)}
                {errorMessage !== false && (<label className={styles.error}>{errorMessage}</label>)}
            </div>
        );
    }
}