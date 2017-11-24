import React from 'react';
import Button from 'Controls/Button.jsx';
import styles from './Dashboard.scss';

const Group = ({children, onClick, name, option, downloadFile}) => (
    <div className={styles.group}>
        <Button 
            disabled={downloadFile}
            option={option || 'success'} 
            onClick={onClick}>{name}</Button>
        <span> - {children}</span>
    </div>
);

export default class Download extends React.PureComponent {

    render() {

        const { onDownload, downloadFile } = this.props;
        return (
            <div>
                <Group 
                    downloadFile={downloadFile}
                    onClick={()=>onDownload('users')} 
                    name="Заявки">
                    выгрузка всех зарегистрированных пользователей    
                </Group> 
                <Group 
                    downloadFile={downloadFile}
                    onClick={()=>onDownload('autors')} 
                    name="Авторы">
                    данные об авторах    
                </Group>  
                <Group 
                    downloadFile={downloadFile}
                    onClick={()=>onDownload('town')} 
                    name="Города">
                    города участников    
                </Group>  
                <Group 
                    downloadFile={downloadFile}
                    onClick={()=>onDownload('post')} 
                    name="Рабочие места">
                    рабочие места участников    
                </Group> 
                <Group 
                    downloadFile={downloadFile}
                    option={'primary'}
                    onClick={()=>onDownload('all', 'zip')} 
                    name="Выгрузить все">
                    выгрузка всех данных базы    
                </Group> 
            </div>
        );
    }
}