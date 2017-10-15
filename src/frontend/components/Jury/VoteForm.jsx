import React from 'react';
import stylesCommon from 'Register/Input.scss';
import styles from 'Jury/Jury.scss';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 
import categories from 'categories.js';
import ClassName from 'className.js';

export default (props) => {

    return (
        <div className={stylesCommon.form}>
            <div className={styles.categories}>
                <div {...ClassName({[styles.active]: false}, `${styles.btn}`)}>Все</div>
                {categories.map(x => 
                    <div key={x}{...ClassName({[styles.active]: false}, `${styles.btn}`)}>{x}</div>)}
            </div>
            <Row>
                <Col number={6}>
                </Col>
                <Col number={6}>
                </Col>
            </Row>
        </div>);
};