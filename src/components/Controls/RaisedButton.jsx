import React from 'react';
import styles from './RaisedButton.scss';

export default ({title, type}) => (
    <button type="button" className={`btn btn-${type} ${styles.raised}`}>{title}</button>
);