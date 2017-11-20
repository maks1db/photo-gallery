import React from 'react';
import styles from './Dashboard.scss';
import ClassName from 'className.js';

const Nav = ( { tab, onSetTab }) => (

    <nav className="navbar navbar-inverse" role="navigation">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand">Разделы</a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li {...ClassName({active: tab === 0 })}>
                        <a onClick={() => onSetTab(0)}>
                            Выгрузка данных
                        </a>
                    </li>
                    <li {...ClassName({active: tab === 1 })}>
                        <a onClick={() => onSetTab(1)}>
                            Фото
                        </a>
                    </li>
                    <li {...ClassName({active: tab === 2 })}>
                        <a onClick={() => onSetTab(2)}>
                            Статистика
                        </a>
                    </li>
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