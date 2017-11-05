import crud from '../api/crud';
import adminConst from 'constants/adminDashboard';
import deleteProps from 'deleteProps.js';
import { toastr } from 'react-redux-toastr';

const deleteApi = {};

const afterDeleteActions = {
    photo: {
        items: 'users', 
        itemsSort: {name:1}, 
        subItems: 'photo', 
        subItemsSort: {title: 1}
    }
};

export const items = (model, sort) => dispatch => {
    dispatch({
        type: adminConst.REQUEST_ITEMS
    });

    new crud(`admin/${model}`).get({sort})
        .then(x => {
            dispatch({
                type: adminConst.RECEIVE_ITEMS,
                items: x.data
            });       
        });
};

export const subItems = (model, sort) => dispatch => {
    dispatch({
        type: adminConst.REQUEST_SUBITEMS
    });

    new crud(`admin/${model}`).get({sort})
        .then(x => {
            dispatch({
                type: adminConst.RECEIVE_SUBITEMS,
                items: x.data
            });       
        });
};

export const itemResult = (model, id) => dispatch => {
    dispatch({
        type: adminConst.REQUEST_ITEM_RESULT
    });

    new crud(`admin/${model}`).getItem(id)
        .then(x => {
            dispatch({
                type: adminConst.RECEIVE_ITEM_RESULT,
                result: x.data
            });       
        });
};

export const newItem = (model, key, value) => dispatch => {
    dispatch({
        type: adminConst.REQUEST_ITEMS
    });

    new crud(`admin/${model}`).post({[key]: value})
        .then(() => new crud(`admin/${model}`).get({sort: {[key]: 1}}))
        .then(x => {
            dispatch({
                type: adminConst.RECEIVE_ITEMS,
                items: x.data
            });       
        });
};

export const saveItem = (model, obj, key) => dispatch => {
    dispatch({
        type: adminConst.REQUEST_ITEM_RESULT
    });

    new crud(`admin/${model}`).patch(obj._id, deleteProps(obj, '_id'))
        .then(x => {
            dispatch({
                type: adminConst.RECEIVE_ITEM_RESULT,
                result: x.data
            });   
            dispatch({
                type: adminConst.CHANGE_ITEMS_KEY,
                key, 
                id: obj._id, 
                value: x.data[key]   
            });   
            toastr.success('Записано', 'Объект успешно изменен');  
        });
};

export const removeItem = (model, id, sort) => dispatch => {

    new crud(`admin/${model}`).delete(id)
        .then( () => {
            const actions = afterDeleteActions[model];

            if (actions) {
                dispatch(items(actions.items, actions.itemsSsort));
                dispatch(subItems(actions.subItems, actions.subItemsSsort));
                toastr.warning('Удалено', 'Объект удален из базы данных');
            }
            else {
                dispatch(items(model, sort));
                toastr.warning('Удалено', 'Объект удален из базы данных');
            }
                       
        }); 
};

export const setModify = (key, value) => {
    return {
        type: adminConst.SET_MODIFY,
        key, value
    };   
};

export const setItemActive = (id) => {
    return {
        type: adminConst.SET_ITEM_ACTIVE,
        id
    };
};
