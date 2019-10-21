import Calendar from 'Calendar/Calendar.jsx';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Main.scss';

const Register = ({ dateEnd }) =>
    !dateEnd.isFetching &&
    (dateEnd.value < new Date() ? (
        <h4>Прием заявок завершен</h4>
    ) : (
        <Link to="/register" className={styles.register}>
            Подать заявку
            <span className="fa fa-long-arrow-right" />
        </Link>
    ));

const Info = ({ dateEnd }) =>
    !dateEnd.isFetching &&
    dateEnd.value > new Date() && (
        <div className={styles.counter}>
            <h5>До завершения подачи заявок:</h5>
            {!dateEnd.isFetching && <Calendar dateEnd={dateEnd.value} />}
        </div>
    );

export default ({ dateEnd }) => (
    <div className={styles.main}>
        <article className={styles.article}>
            <div>
                <h4>
                    24 ноября 2018 г. 15:00
                    <br />
                    Липецкая областная универсальная научная библиотека
                </h4>
                <h1>Ежегодная туристическая фотовыставка</h1>
                <Register dateEnd={dateEnd} />
            </div>
        </article>
        <Info dateEnd={dateEnd} />
    </div>
);
