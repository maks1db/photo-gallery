import constants from 'constants/juryConstants';
import crud from 'api/crud';
import categories from 'categories.js';

export const changeCategory = (value) => {
    return {
        type: constants.CHANGE_ACTIVE_CATEGORY,
        value
    };
};

export const setModal = (value) => {
    return {
        type: constants.SET_MODAL,
        value
    };
};

export const setModalImg = (value) => {
    return {
        type: constants.SET_MODAL_IMG,
        value
    };
};

export const getPhotoByCategory = category => dispatch => {
    dispatch({
        type: constants.ITEMS_REQUEST
    });
    dispatch({
        type: constants.RATING_REQUEST
    });
    let obj = {
        sort: {
            create: '-1'
        }
    };
    if (category > 0) {
        obj.query = {
            category: categories[category-1]
        };
    }

    Promise.all(
        [
            new crud('jury/photo').get(obj),
            new crud('jury/rating').get()
        ]
    )
        .then(x => {
            dispatch({
                type: constants.ITEMS_RECEIVE,
                items: x[0].data
            });
            dispatch({
                type: constants.RATING_RECEIVE,
                items: x[1].data
            });
        });
};

export const updateRating = (id, value) => dispatch => {
    dispatch({
        type: constants.RATING_UPDATE
    });   

    new crud('jury/rating')
        .patch(id, { value })
        .then(() => {
            dispatch({
                type: constants.RATING_UPDATE_COMPLETE,
                id, value
            });
        });
};