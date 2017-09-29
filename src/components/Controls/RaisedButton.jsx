import React from 'react';
import styles from './RaisedButton.scss';
import deleteProps from 'deleteProps.js';

export default (props) => (
    <button type="button" className={`btn btn-${props.option} ${styles.raised}`} {...deleteProps(props, 'option')}>{props.title}</button>
);