import React from 'react';
import styles from './Login.scss';
import Input from 'Controls/Input.jsx';
import Button from 'Controls/Button.jsx';

export default (props) => {

    const init = (key) => {
        return {
            errorMessage: false,
            defaultValue: props[key],
            onChange: (e) => props.onChangeKey(key, e.target.value)
        };
    };

    const onKeyUp = (e) => {
        if (e.keyCode === 13) props.onLogin(props.login, props.password);
    };

    return (
        <div className={styles.login}>
            <div className={styles.content}>
                <Input
                    label="Логин"
                    {...init('login')}
                    onKeyUp={onKeyUp}
                />
                <Input
                    label="Пароль"
                    {...init('password')}
                    type="password"
                    onKeyUp={onKeyUp}
                />
                <div className={styles.button}>
                    <Button 
                        option="success"
                        onClick={() => props.onLogin(props.login, props.password)}
                    >
                        Войти
                    </Button>
                </div>
            </div>
        </div>);
};