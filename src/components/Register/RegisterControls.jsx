import React from 'react';
import styles from './Register.scss';
import Button from 'Controls/RaisedButton.jsx';

export default (props) => (
    <div className={styles.fixed}>
        <div className={`${styles.center} ${styles.buttons}`}>
            <Button 
                onClick={() => props.onSetRegisterStep(1)}
                children={<i className={'fa fa-arrow-left'}></i>} 
                {...(props.registerStep === 1 ? {disabled:true} : {})}
                option="primary"/>

            {props.registerStep === 1 && (<Button 
                onClick={() => props.onValidation()}
                children={<i className={'fa fa-arrow-right'}></i>} 
                option="primary"/>)}
                
            {(props.registerStep === 2 && !props.userRegister) && (
                <Button 
                    onClick={() => {
                        props.onValidation();
                        props.onSaveUser();
                    }}
                    {...((props.onSave || props.count === 0) && {disabled:true})}

                    children={props.photoNumber > 0 ? <label className={styles.number}>{props.photoNumber}</label> : <i className={'fa fa-floppy-o'}></i>} 
                    option="success"/>)}
        </div> 
    </div>
);