import React from 'react';
import styles from './RaisedButton.scss';
import deleteProps from 'deleteProps.js';
import ClassName from 'className.js';

export default (props) => (
    <button type="button" 
        {...ClassName({[styles.mini]: props.mini}, `btn btn-${props.option} ${styles.raised} ${styles.ico} ${props.className ? props.className : ''}`)}
        {...deleteProps(props, ['option', 'mini', 'className'])}
    >{props.children}</button>
);