import React from 'react';
import styles from './Dashboard.scss';
import ClassName from 'className.js';

const NavItem = ({tab, onSetTab, children, number}) => (
    <li {...ClassName({active: tab === number })}>
        <a onClick={() => onSetTab(number)}>
            {children}
        </a>
    </li>   
);

const Nav = ( { tab, onSetTab }) => (

    <nav className="navbar navbar-inverse" role="navigation">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand">Разделы</a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <NavItem tab={tab} number={0} onSetTab={onSetTab}>Фото</NavItem>
                    <NavItem tab={tab} number={1} onSetTab={onSetTab}>Выгрузка данных</NavItem>
                    <NavItem tab={tab} number={2} onSetTab={onSetTab}>Статистика</NavItem>
                </ul>
            </div>
        </div>
    </nav>
);

export default class Content extends React.PureComponent {

    render() {
        const {
            tab, onSetTab, children
        } = this.props;

        return (
            
            <div className={`${styles.content} ${styles.pad}`}>
                <div className={styles.center}>
                    <Nav 
                        tab={tab}
                        onSetTab={onSetTab}
                    /> 
                </div>
                <div className={styles.pad}>
                    {children}
                </div> 
            </div> 
        );
    }
}