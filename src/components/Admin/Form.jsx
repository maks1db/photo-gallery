import React from 'react';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx';
import styles from './Form.scss';

export default (props) => (
    <div className={styles.content}>
        <Row>
            <Col number={3}>
                <div className={styles.items}>
                    {props.children[0]}
                </div>
            </Col>
            <Col number={9}>
                <div className={styles.result}>
                    {props.children[1]}
                </div>
            </Col>
        </Row>
    </div>
);
