import React from 'react';
import styles from './Register.scss';
import UserInfo from './UserInfo.jsx';
import UserPhoto from './UserPhoto.jsx';
import Button from 'Controls/RaisedButton.jsx';

export default (props) => {

    return (
        <div className={styles.form}>
            {
                props.registerStep === 1 ?
                    <UserInfo 
                        onChangeRegKey={props.onChangeRegKey}
                        registerInfo={props.registerInfo}
                        validationShow={props.validationShow}
                        onValidation={props.onValidation}
                    /> :
                    <UserPhoto
                        addPhoto={props.addPhoto}
                        photo={props.photo}
                        changePhotoKey={props.changePhotoKey}
                    />
            }
            
            <div className={`${styles.center} ${styles.buttons}`}>
                <Button 
                    onClick={() => props.onSetRegisterStep(1)}
                    children={<i className={'fa fa-arrow-left'}></i>} 
                    {...(props.registerStep === 1 ? {disabled:true} : {})}
                    option="primary"/>
                {props.registerStep === 1 && (<Button 
                    onClick={props.onValidation}
                    children={<i className={'fa fa-arrow-right'}></i>} 
                    option="primary"/>)}
                {props.registerStep === 2 && (<Button 
                    onClick={props.onValidation}
                    children={<i className={'fa fa-floppy-o'}></i>} 
                    option="success"/>)}
            </div>   
        </div>
    );
};