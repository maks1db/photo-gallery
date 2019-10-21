import React from 'react';

import styles from './Main.scss';

export default () => (
    <section className={`${styles.section} ${styles.about}`} id="contacts">
        <div className={styles.content}>
            <h5>Контакты</h5>
            <h2>Контактная информация</h2>
            <p>
                <b>Чернобай Алексей</b> - 8 (950) 800-70-15
            </p>
        </div>
    </section>
);
