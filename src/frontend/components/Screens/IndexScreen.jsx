import React from 'react';
import Calendar from 'Calendar/Calendar.jsx';
import styles from './Main.scss';
import { Link } from 'react-router-dom';

const Register = ({ dateEnd }) => (
    !dateEnd.isFetching && (dateEnd.value < new Date() ? 
        (
            <h4>Прием заявок завершен</h4>
        )    
        :    
        <Link to="/register" className={styles.register}>
            Подать заявку<span className="fa fa-long-arrow-right"></span>
        </Link>)
);

const Info = ({ dateEnd }) => (
    !dateEnd.isFetching && dateEnd.value > new Date() && 
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
                    2 декабря 2017 г. 16:00<br />
                    Липецкая областная универсальная научная библиотека
                </h4>
                <h1>Ежегодная туристическая фотовыставка</h1>
                <Register dateEnd={dateEnd} />
            </div>
        </article>  
        <Info dateEnd={dateEnd}/>        
    </div>
);