import React from 'react';
import Input from 'Controls/Input.jsx';
import Textarea from 'Controls/Textarea.jsx';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 

export default (props) => {

    return (
        <Row>
            <Col number={6}>
                <Row>
                    <Col number={9}>
                        <Input 
                            label={'ФИО'}
                            placeholder="Введите ваше ФИО"  
                        />
                    </Col>
                    <Col number={3}>
                        <Input 
                            label={'Возрат'}
                            placeholder="Ваш возраст"  
                            type="number"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col number={6}>
                        <Input 
                            label={'Номер телефона'}
                            placeholder="Введите ваш номер телефона"  
                        />
                    </Col>
                    <Col number={6}>
                        <Input 
                            label={'Email'}
                            type="email"
                            placeholder="Введите адрес электронной почты"
                        />
                    </Col>
                </Row> 
                <Input 
                    label={'Населенный пункт'}
                    placeholder="Ваш населенный пункт"
                />
                <Input 
                    label={'Место работы'}
                    placeholder="Ваше место работы"
                />
                <Input 
                    label={'Кем работаете (учитесь)'}
                    placeholder="Ваша профессия"
                />
            </Col>
            <Col number={6}>
                <Textarea 
                    label={'Туристический опыт'} 
                    rows={8}
                    placeholder="где побывал вообще, в этом сезоне, планы на след.сезон, какой именно вид туризма"
                />
                <Textarea 
                    label={'Дополнительная информация'} 
                    rows={5}
                    placeholder="То, что хотели сообщить о себе, но мы не спросили"
                />
            </Col>
        </Row>
    );
};