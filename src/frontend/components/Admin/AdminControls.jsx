import React from 'react';
import RaisedButton from 'Controls/RaisedButton.jsx';
import styles from './AdminControls.scss';

export default (props)=> (
    <div className={styles.controls}>
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