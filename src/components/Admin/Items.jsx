import React from 'react';
import styles from './Items.scss';
import ClassName from 'className.js'; 

export default (props) => {

    const withSubItems = props.items.data.filter(x => x.subItem === false || x.subItem === true).length > 0;
    return (
        <table {...ClassName({[styles.tableSubItems]: withSubItems}, `table table-striped ${styles.table}`)}>
            <thead>
                <tr><th>{props.title}</th></tr>
            </thead>
            <tbody>
                {
                    !props.items.isFetching && props.items.data.map(x=> 
                        <tr 
                            {...ClassName({
                                [styles.active]: x.active,
                                [styles.subItem]: x.subItem
                            })}
                            key={x._id}
                            onClick={() => {
                                if (x.subItem === false) {
                                    return;
                                }
                                props.setItemActive(x._id);
                            }
                            }
                        ><td>{
                                x.subItem ? x[props.subItemKey] : x[props.itemKey]
                            }
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};