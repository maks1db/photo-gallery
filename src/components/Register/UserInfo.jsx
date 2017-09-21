import React from 'react';
import styles from './UserInfo.scss';
import Input from 'Controls/Input.jsx';
import Textarea from 'Controls/Textarea.jsx';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx';
export default (props) => {

    return (
        <form className={styles.form}>
            <div className={styles.center}>
                <h1>Подача заявки</h1>
            </div>
            <Row>
                <Col number={6}>
                    <Input 
                        label={'ФИО'}
                        placeholder="Введите ваше ФИО"  
                    />
                    <Input 
                        label={'Email'}
                        type="email"
                        placeholder="Введите адрес электронной почты"
                    />
                </Col>
                <Col number={6}>
                    <Textarea 
                        label={'Тур. опыт'} 
                        rows={5}
                        placeholder="где побывал вообще, в этом сезоне, планы на след.сезон, какой именно вид туризма"
                    />
                </Col>
            </Row>
        </form>
    );
};