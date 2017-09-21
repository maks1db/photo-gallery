import React from 'react';
import styles from './Screen.scss';

export default (props) => (
    <div className={styles.subheader}>
        {props.children}
    </div>
);