import React from 'react';
import styles from './Header.scss';
import NavLi from './NavLi.jsx';
import ClassName from 'className.js';
import ToTop from 'react-scroll-top';
import smoothScroll from 'smoothscroll';

const roleUrl = (role) => {
    switch (role) {
        case 'admin':
            return '/admin/dashboard';
        case 'superadmin':
            return '/admin/dashboard';
        case 'jury':
            return '/jury'
    }
}
const scrollTo = (selector) => setTimeout(function() {
    smoothScroll(document.querySelector(selector))
}, 50)

const NavItems = ({ isAdmin, role, onLogout, dateEnd }) => {
    return(
        <ul>
            {(role && !isAdmin) && <NavLi href={roleUrl(role)} title="Кабинет" />}
            {<NavLi href='/' title="Главная" onClick={() => scrollTo('#main')}/>}
            {isAdmin && <NavLi href='/admin/dashboard' title="Консоль" />}
            {isAdmin && <NavLi href='/admin/users' title="Участники" />}
            {isAdmin && <NavLi href='/admin/photo' title="Фото" />}
            {isAdmin && <NavLi href='/admin/jury' title="Жюри" /> }  
            {!isAdmin && <NavLi title="О конкурсе" onClick={() => scrollTo('#about')}/>}
            {!isAdmin && <NavLi title="Наше жюри" onClick={() => scrollTo('#jury')} />}
            {!isAdmin && <NavLi title="Контакты" onClick={() => scrollTo('#contacts')} />}
            {role === '' && 
                !dateEnd.isFetching && 
                dateEnd.value < new Date() && 
                <NavLi title="Голосование" href="/login" />}
            {role && <NavLi onClick={onLogout} title="Выйти" />}
        </ul>)
}
export default class Header extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            background: false
        }
    }

    onScroll = () => {
        const background = this.state.background;
        const { onScroll } = this.props;

        if (background && window.scrollY < 10) {
            this.setState({background: false});
            onScroll(false);
        }

        if (!background && window.scrollY > 10) {
            this.setState({background: true});
            onScroll(true)
        }

    }

    componentWillMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWIllUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    render() {

        const { title, showMainLink, adminDashboard, role, onLogout, dateEnd } = this.props;
        return (<div {...ClassName({[styles.background]: this.state.background}, styles.header)}>
            <div className={styles.title}>{title}</div> 
            <nav className={styles.navigation}>
                <NavItems 
                    isAdmin={adminDashboard}
                    role={role}
                    onLogout={onLogout}
                    dateEnd={dateEnd}
                />   
            </nav>
            <div className={styles['to-top']} >
                <ToTop 
                    hideAt={100} 
                    position="bottom" 
                />
            </div>
        </div>);
    }
}