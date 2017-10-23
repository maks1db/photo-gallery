import React from 'react';
import styles from './Main.scss';

export default () => (
    <section className={`${styles.section} ${styles.about}`} id="contacts">
        <div className={styles.content}>
            <h5>Контакты</h5>
            <h2>Контактная информация</h2>    
            <p><b>Чернобай Алексей</b> - 8(950) 800-70-15</p>
            <p><b>Скворцова Олеся</b> - 8(910) 356-88-02</p>
        </div>
    </section>
);