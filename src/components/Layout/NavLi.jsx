import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';

export default ({title,href=''}) => (
    <li><NavLink to={href} activeClassName={styles.active}>{title}</NavLink></li>
);