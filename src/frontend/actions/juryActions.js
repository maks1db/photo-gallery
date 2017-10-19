import constants from 'constants/juryConstants';
import crud from 'api/crud';
import categories from 'categories.js';

export const changeCategory = (value) => {
    return {
        type: constants.CHANGE_ACTIVE_CATEGORY,
        value
    };
};

export const getPhotoByCategory = category => dispatch => {
    dispatch({
        type: constants.ITEMS_REQUEST
    });

    let obj = {};
    if (categories > 0) {
        obj.query = {
            category: categories[category]
        };
    }

    new crud('jury/photo').get(obj)
        .then( x=> {
            dispatch({
                type: constants.ITEMS_RECEIVE,
                items: x.data
            });
        });

} 