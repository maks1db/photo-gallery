import React from 'react';
import styles from './Main.scss';

const style = {
    background: 'url("/assets/images/example.jpg")'
};

export default (props) => (
    <div className={styles.subheader} style={style}>
        <article className={styles.article}>
            <div>
                <h4>1 декабря 2017 г., Липецк</h4>
                <h1>Ежегодная турристическая фотовыставка</h1>
                <a href="#subheader" className={styles.register}>
                    Подать заявку<span className="fa fa-long-arrow-right"></span>
                </a>
            </div>
        </article>           
    </div>
);