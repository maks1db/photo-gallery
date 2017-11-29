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

class GroupPhoto extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            input: 0
        };
    }

    componentWillMount() {
        this.setState({input: this.props.defaultValue});
    }   

    render() {
        const {children, name, option, downloadFile, onDownload, route} = this.props;
        const { input } = this.state;

        return (
            <div className={styles.group_control}>
                <Button 
                    disabled={downloadFile}
                    option={option || 'success'} 
                    onClick={() => onDownload(`${route}/${input}`, 'zip')}>{name}</Button>
                <input type="number" 
                    className="form-control" 
                    value={input}
                    onChange={(e) => this.setState({input: e.target.value})}
                />
                <span> - {children} {input} шт.</span>
                
            </div>
        );   
    }
}

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
                    onClick={()=>onDownload('autorsAge')} 
                    name="Авторы (по возрасту)">
                    данные об авторах с сортировкой по возрасту   
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
                <GroupPhoto 
                    downloadFile={downloadFile}
                    onDownload={onDownload}
                    defaultValue={40}
                    route={'first'}
                    name="Фото">
                    выгрузить первые
                </GroupPhoto> 
                <Group 
                    downloadFile={downloadFile}
                    option={'primary'}
                    onClick={()=>onDownload('selected', 'zip')} 
                    name="Отмеченные">
                    выгрузка всех отмеченных фото    
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