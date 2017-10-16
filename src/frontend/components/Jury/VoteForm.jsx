import React from 'react';
import stylesCommon from 'Register/Input.scss';
import styles from 'Jury/Jury.scss';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 
import categories from 'categories.js';
import ClassName from 'className.js';

export default (props) => {
    let catItem = 0;
    return (
        <div className={stylesCommon.form}>
            <div className={styles.categories}>
                <div 
                    onClick={() => props.onChangeCategory(0)}
                    {...ClassName({[styles.active]: props.category === 0}, `${styles.btn}`)}>
                    <i>Все</i>
                </div>
                {categories.map(x => {
                    return (<div 
                        onClick={() => props.onChangeCategory(x === categories[0] ? 1 : 2)}
                        key={x}
                        {...ClassName({[styles.active]: props.category === (x === categories[0] ? 1 : 2)}, 
                            `${styles.btn}`)}><i>{x}</i></div>);})
                }
            </div>
            <Row>
                <Col number={6}>
                </Col>
                <Col number={6}>
                </Col>
            </Row>
        </div>);
};