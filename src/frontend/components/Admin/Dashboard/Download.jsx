import React from 'react';
import Button from 'Controls/Button.jsx';
import styles from './Dashboard.scss';

const Group = ({children, onClick, name}) => (
    <div className={styles.group}>
        <Button option="success" onClick={onClick}>{name}</Button>
        <span> - {children}</span>
    </div>
);

export default class Download extends React.PureComponent {

    render() {

        const { onDownload } = this.props;
        return (
            <div>
                <Group 
                    onClick={()=>onDownload('users')} 
                    name="Заявки">
                    выгрузка всех зарегистрированных пользователей    
                </Group> 
                <Group 
                    onClick={()=>onDownload('autors')} 
                    name="Авторы">
                    данные об авторах    
                </Group>  
                <Group 
                    onClick={()=>onDownload('town')} 
                    name="Города">
                    города участников    
                </Group>  
                <Group 
                    onClick={()=>onDownload('post')} 
                    name="Рабочие места">
                    рабочие места участников    
                </Group> 
            </div>
        );
    }
}