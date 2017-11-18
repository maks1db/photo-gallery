import React from 'react';
import Button from 'Controls/Button.jsx';

const Group = ({children, onClick, name}) => (
    <div style={{marginBottom: '14px'}}>
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
            </div>
        );
    }
}