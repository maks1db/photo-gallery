import Calendar from 'Calendar/Calendar.jsx';
import React from 'react';

import styles from './Main.scss';

const Info = ({ dateEnd }) =>
    (
        <div className={styles.counter}>
            <h5>На сайте возникли технические проблемы. <br />
                Присылайте заявки на почту <a href="mailto:Directlip@yandex.ru">Directlip@yandex.ru</a> <br />
                По возникшим вопросам звоните 8950-800-7015 <br />
            </h5>
            {!dateEnd.isFetching && <Calendar dateEnd={dateEnd.value} />}
        </div>
    );

export default ({ dateEnd }) => (
    <div className={styles.main}>
        <article className={styles.article}>
            <div>
                <h4>
                    24 ноября 2019 г. 15:00
                    <br />
                    Липецкая областная универсальная научная библиотека
                </h4>
                <h1>Ежегодная туристическая фотовыставка</h1>
            </div>
        </article>
        <Info dateEnd={dateEnd} />
    </div>
);
