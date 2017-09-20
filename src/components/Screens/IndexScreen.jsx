import React from 'react';
import Calendar from 'Calendar/Calendar.jsx';
import styles from './Main.scss';

const style = {
    background: 'url("/assets/images/example.jpg")'
};

export default ({ dateEnd }) => (
    <div className={styles.subheader}>
        <article className={styles.article}>
            <div>
                <h4>1 декабря 2017 г., Липецк</h4>
                <h1>Ежегодная туристическая фотовыставка</h1>
                <a href="#subheader" className={styles.register}>
                    Подать заявку<span className="fa fa-long-arrow-right"></span>
                </a>
            </div>
        </article>  
        <div className={styles.counter}>
            <h5>Завершение подачи заявок через:</h5>
            <Calendar dateEnd={dateEnd} />
        </div>        
    </div>
);