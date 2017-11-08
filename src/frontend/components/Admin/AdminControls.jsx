import React from 'react';
import RaisedButton from 'Controls/RaisedButton.jsx';
import styles from './AdminControls.scss';

export default (props)=> (
    <div className={styles.controls}>
        {props.create && <RaisedButton 
            mini={true}
            children={<i className={'fa fa-plus'}></i>} 
            option="primary"  
            onClick={props.onCreate}
        />}
        {!props.create && <RaisedButton 
            mini={true}
            children={<i className={'fa fa-picture-o'}></i>} 
            option="primary"  
            disabled={!props.active || props.downloadImg} 
            onClick={props.onGetUserPhoto}
        />}
        <RaisedButton 
            mini={true}
            children={<i className={'fa fa-floppy-o'}></i>} 
            option="success"  
            disabled={!props.active} 
            onClick={props.onSave}
        />
        <RaisedButton 
            mini={true}
            onClick={props.onDelete}
            children={<i className={'fa fa-times'}></i>} 
            option="danger"   
            disabled={!props.active} 
        />
    </div>
);