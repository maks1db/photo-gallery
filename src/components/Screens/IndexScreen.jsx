import React from 'react';
import Calendar from 'Calendar/Calendar.jsx';
import styles from './Main.scss';
import { Link } from 'react-router-dom';
import MainScreen from 'Layout/MainScreen.jsx';

const style = {
    background: 'url("/assets/images/example.jpg")'
};

export default ({ dateEnd }) => (
    <div>
        <article className={styles.article}>
            <div>
                <h4>1 декабря 2017 г., Липецк</h4>
                <h1>Ежегодная туристическая фотовыставка</h1>
                <Link to="/register" className={styles.register}>
                     Подать заявку<span className="fa fa-long-arrow-right"></span>
                </Link>
            </div>
        </article>  
        <div className={styles.counter}>
            <h5>До завершения подачи заявок:</h5>
            <Calendar dateEnd={dateEnd} />
        </div>        
    </div>
);