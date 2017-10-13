import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';
import deleteProps from 'deleteProps.js';

export default ({title,href='',...props}) => (
    <li>
        <NavLink 
            to={href} {...deleteProps(props, ['href', 'title'])}
        >
            {title}
        </NavLink>
    </li>
);