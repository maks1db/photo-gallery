import React from 'react';
import styles from './Register.scss';
import UserInfo from './UserInfo.jsx';
import Button from 'Controls/RaisedButton.jsx';

export default (props) => {

    return (
        <form className={styles.form}>
            <UserInfo 
                onChangeRegKey={props.onChangeRegKey}
                registerInfo={props.registerInfo}
            />
            <div className={styles.center}>
                <Button 
                    onClick={props.validationUserInfo}
                    title={<i className={`fa fa-arrow-right ${styles.arrow}`}></i>} 
                    type="primary"/>
            </div>   
        </form>
    );
};