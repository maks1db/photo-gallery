import React from 'react';
import styles from './Header.scss';
import NavLi from './NavLi.jsx';
import ClassName from 'className.js';

const NavItems = (showMainLink, isAdmin) => {
    if (isAdmin) {
        return (<ul>
            {<NavLi href='/' title="Главная" />}
            <NavLi href='/admin/users' title="Пользователи" />
            <NavLi href='/admin/photo' title="Фото" />
            <NavLi href='/admin/jury' title="Жюри" />
        </ul>);   
    }
    return (<ul>
        {showMainLink && <NavLi href='/' title="Главная" />}
        <NavLi title="О нас" />
        <NavLi title="Жюри" />
        <NavLi title="Галерея" />
        <NavLi title="Местоположение" />
    </ul>)
}
export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            background: false
        }
    }

    onScroll = () => {
        const background = this.state.background;

        if (background && window.scrollY < 10) {
            this.setState({background: false});
        }

        if (!background && window.scrollY > 10) {
            this.setState({background: true});
        }

    }

    componentWillMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWIllUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    render() {

        const { title, showMainLink, adminDashboard } = this.props;
        return (<div {...ClassName({[styles.background]: this.state.background}, styles.header)}>
            <div className={styles.title}>{title}</div> 
            <nav className={styles.navigation}>
                {NavItems(showMainLink, adminDashboard)}     
            </nav>
        </div>);
    }
}