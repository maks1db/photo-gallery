import React from 'react';
import Calendar from 'Calendar/Calendar.jsx';
import styles from './Main.scss';
import { Link } from 'react-router-dom';

export default ({ dateEnd }) => (
    <div className={styles.main}>
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
            {!dateEnd.isFetching && <Calendar dateEnd={dateEnd.value} />}
        </div>        
    </div>
);