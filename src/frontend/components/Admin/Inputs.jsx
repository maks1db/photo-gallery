import React from 'react';
import PhotoInputs from 'Register/PhotoInputs.jsx';
import styles from './Inputs.scss';

export default (props) => {
    const init = (key) => {
        return {
            defaultValue: props.itemResult.data[key],
            errorMessage: false,
            onChange: (e) => props.setModify(key, e.target.value)
        };
    };

    return (
        <div>
            {!props.itemResult.isFetching && (
                <div>
                    <PhotoInputs
                        init={init} />
                    <div
                        className={styles.img}
                    >
                        {props.itemResult.data.title && <img 
                            
                            src={props.itemResult.data.picture} 
                            alt={props.itemResult.data.title}    
                        />}
                    </div>
                </div>
            )
            }
        </div>

    );
};