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
            name: key,
            onValidation: props.onValidation
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
                            minLength={10}
                            maxLength={64}
                        />
                    </Col>
                    <Col number={3}>
                        <Input 
                            label={'Возрат'}
                            placeholder="Ваш возраст"  
                            type="number"
                            {...init('age')}
                            required={true}
                            min={0}
                            max={90}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col number={6}>
                        <Input 
                            label={'Номер телефона'}
                            placeholder="Введите ваш номер телефона"  
                            {...init('phone')}
                            minLength={11}
                            maxLength={20}
                        />
                    </Col>
                    <Col number={6}>
                        <Input 
                            label={'Email'}
                            type="email"
                            placeholder="Введите адрес электронной почты"
                            {...init('email')}
                            required={true}
                            maxLength={60}
                        />
                    </Col>
                </Row> 
                <Input 
                    label={'Населенный пункт'}
                    placeholder="Ваш населенный пункт"
                    {...init('town')}
                    required={true}
                    maxLength={60}
                />
                <Input 
                    label={'Место работы'}
                    placeholder="Ваше место работы"
                    {...init('workPlace')}
                    required={true}
                    maxLength={90}
                />
                <Input 
                    label={'Кем работаете (учитесь)'}
                    placeholder="Ваша профессия"
                    {...init('post')}
                    required={true}
                    maxLength={90}
                />
            </Col>
            <Col number={6}>
                <Textarea 
                    label={'Туристический опыт'} 
                    rows={8}
                    placeholder="где побывал вообще, в этом сезоне, планы на след.сезон, какой именно вид туризма"
                    {...init('experience')}
                    required={true}
                    minLength={60}
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