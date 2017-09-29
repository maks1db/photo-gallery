import React from 'react';
import Input from 'Controls/Input.jsx';
import Textarea from 'Controls/Textarea.jsx';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 

export default (props) => {
    const init = (key) => {
        return {
            onChange: (e) => props.onChangeRegKey(key, e.target.value),
            defaultValue: props.registerInfo[key].value,
            errorMessage: props.registerInfo[key].errorMessage
        };
    };

    return (
        <Row>
            <Col number={6}>
                <Row>
                    <Col number={9}>
                        <Input 
                            label={'ФИО'}
                            placeholder="Введите ваше ФИО"  
                            {...init('name')}
                        />
                    </Col>
                    <Col number={3}>
                        <Input 
                            label={'Возрат'}
                            placeholder="Ваш возраст"  
                            type="number"
                            {...init('age')}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col number={6}>
                        <Input 
                            label={'Номер телефона'}
                            placeholder="Введите ваш номер телефона"  
                            {...init('phone')}
                        />
                    </Col>
                    <Col number={6}>
                        <Input 
                            label={'Email'}
                            type="email"
                            placeholder="Введите адрес электронной почты"
                            {...init('email')}
                        />
                    </Col>
                </Row> 
                <Input 
                    label={'Населенный пункт'}
                    placeholder="Ваш населенный пункт"
                    {...init('town')}
                />
                <Input 
                    label={'Место работы'}
                    placeholder="Ваше место работы"
                    {...init('workPlace')}
                />
                <Input 
                    label={'Кем работаете (учитесь)'}
                    placeholder="Ваша профессия"
                    {...init('post')}
                />
            </Col>
            <Col number={6}>
                <Textarea 
                    label={'Туристический опыт'} 
                    rows={8}
                    placeholder="где побывал вообще, в этом сезоне, планы на след.сезон, какой именно вид туризма"
                    {...init('experience')}
                />
                <Textarea 
                    label={'Дополнительная информация'} 
                    rows={5}
                    placeholder="То, что хотели сообщить о себе, но мы не спросили"
                    {...init('info')}
                />
            </Col>
        </Row>
    );
};