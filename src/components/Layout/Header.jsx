import React from 'react';
import styles from './Header.scss';
import NavLi from './NavLi.jsx';

export default (props) => (
    <div className={styles.header}>
        <div className={styles.title}>{props.title}</div> 
        <nav className={styles.navigation}>
            <ul>
                {props.showMainLink && <NavLi href='/' title="Главная" />}
                <NavLi title="О нас" />
                <NavLi title="Жюри" />
                <NavLi title="Галерея" />
                <NavLi title="Местоположение" />
            </ul>
        </nav>
    </div>
);