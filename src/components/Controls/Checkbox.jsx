import React from 'react';
import styles from './Checkbox.scss';
import deleteProps from 'deleteProps.js';

export default (props) => (
    <div className={`checkbox ${styles.checkbox}`}>
        <label>
            <input 
                type="checkbox" 
                checked={props.defaultValue}
                {...deleteProps(props, 'errorMessage')} /> {props.label}
        </label>
    </div>
);