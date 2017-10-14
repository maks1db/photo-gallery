import React from 'react';
import Input from 'Controls/Input.jsx';
import Textarea from 'Controls/Textarea.jsx';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 
import Checkbox from 'Controls/Checkbox.jsx';
import styles from './Register.scss';

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
            <Row>
                <Col number={props.admin ? 12 : 6}>
                    <Row>
                        <Col number={8}>
                            <Input 
                                label={'ФИО'}
                                placeholder="Введите ваше ФИО"  
                                {...init('name')}
                            />
                        </Col>
                        <Col number={4}>
                            <Input 
                                label={'Возрат'}
                                placeholder="Ваш возраст" 
                                type="number"
                                {...init('age')}
                                maxLength={2}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col number={6}>
                            <Input 
                                mask={'+7 (999) 999-99-99'}
                                maskChar='_'
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
                <Col number={props.admin ? 12 : 6}>
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
            {!props.admin && <div className={styles.center}>
                <Checkbox 
                    {...init('confirm')}
                    label={'Разрешаю использовать указанне данные в фотовыставке и мероприятиях, связанных с ней'} />
            </div>}
        </div>
    );
};