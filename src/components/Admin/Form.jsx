import React from 'react';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx';
import styles from './Form.scss';

export default (props) => (
    <div>
        <div className={styles.items}>
            {props.children[0]}
        </div>
        <div className={styles.result}>
            {props.children[1]}
        </div>
    </div>
);
