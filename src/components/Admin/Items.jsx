import React from 'react';
import styles from './Items.scss';
import ClassName from 'className.js'; 

export default (props) => {

    return (
        <table className={`table table-striped ${styles.table}`}>
            <thead>
                <tr><th>{props.title}</th></tr>
            </thead>
            <tbody>
                {
                    !props.items.isFetching && props.items.data.map(x=> 
                        <tr 
                            {...ClassName({[styles.active]: x.active})}
                            key={x._id}
                            onClick={() => props.setItemActive(x._id)}
                        ><td>{x[props.itemKey]}</td></tr>
                    )
                }
            </tbody>
        </table>
    );
};