import React from 'react';
import styles from './Login.scss';
import Input from 'Controls/Input.jsx';
import Button from 'Controls/Button.jsx';

export default (props) => (
    <div className={styles.login}>
        <div className={styles.content}>
            <Input
                label="Логин"
                errorMessage={false}
            />
            <Input
                label="Пароль"
                errorMessage={false}
                type="password"
            />
            <div className={styles.button}>
                <Button 
                    option="success"
                >
                    Войти
                </Button>
            </div>
        </div>
    </div>
);