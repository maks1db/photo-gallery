import React from 'react';
import Input from 'Controls/Input.jsx';
import Textarea from 'Controls/Textarea.jsx';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 

export default (props) => {

    const init = (key) => {
        if (props.admin) {
            return {
                errorMessage: false,
                defaultValue: props.itemResult.isFetching ? '' : props.itemResult.data[key],
                onChange: (e) => props.setModify(key, e.target.value),
            };
        }
        return {
            onChange: (e) => {
                props.onChangeRegKey(key, key=== 'confirm' ? e.target.checked : e.target.value);
                if (props.validationShow) {
                    props.onValidation(key);
                }
            },
            defaultValue: props.registerInfo[key].value,
            errorMessage: props.registerInfo[key].errorMessage
        };
    };
    return (
        <div>
            <Input 
                label="ФИО"
                {...init('name')}
            />
            {props.admin && <Row>
                <Col number={6}>
                    <Input 
                        label="Логин"
                        {...init('login')}
                    />
                </Col>
                <Col number={6}>
                    <Input 
                        label="Пароль"
                        {...init('password')}
                    />
                </Col>
            </Row>}

            <Textarea 
                label="О себе"
                {...init('about')}
                rows={6}
            />
        </div>
            
        
    );
};