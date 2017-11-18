import React from 'react';
import Button from 'Controls/Button.jsx';

const Group = ({children, onClick, name}) => (
    <div>
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
                    name="Выгрузить">
                выгрузка всех зарегистрированных пользователей    
                </Group>     
            </div>
        );
    }
}