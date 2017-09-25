import React from 'react';
import { Link } from 'react-router-dom';

export default ({title,href=''}) => (
    <li><Link to={href}>{title}</Link></li>
);