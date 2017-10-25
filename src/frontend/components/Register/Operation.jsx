import React from 'react';
import styles from './Operation.scss';

export default ({open, text}) => (
    open && <div className={styles.operation}>
        <h1>{text}</h1>
    </div>
);