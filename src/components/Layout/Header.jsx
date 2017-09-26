import React from 'react';
import styles from './Header.scss';
import NavLi from './NavLi.jsx';
import ClassName from 'className.js';

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

        const { title, showMainLink } = this.props;
        return (<div {...ClassName({[styles.background]: this.state.background}, styles.header)}>
            <div className={styles.title}>{title}</div> 
            <nav className={styles.navigation}>
                <ul>
                    {showMainLink && <NavLi href='/' title="Главная" />}
                    <NavLi title="О нас" />
                    <NavLi title="Жюри" />
                    <NavLi title="Галерея" />
                    <NavLi title="Местоположение" />
                </ul>
            </nav>
        </div>);
    }
}