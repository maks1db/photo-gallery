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

export const commentShow = (value) => {
    return {
        type: constants.COMMENT_ACTIVE,
        value
    };
};

export const changeComment = (value) => {
    return {
        type: constants.CHANGE_COMMENT,
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
    let route = 'jury/photo';
    if (category > 0) {
        obj.query = {
            category: categories[category-1]
        };
    }
    else if (category < 0) {
        route = 'jury/ratingEmpty';    
    }

    Promise.all(
        [
            new crud(route).get(obj),
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

export const updateRating = (id, key, value) => dispatch => {
    dispatch({
        type: constants.RATING_UPDATE
    });   

    new crud('jury/rating')
        .patch(id, { [key]: value })
        .then(() => {
            dispatch({
                type: constants.RATING_UPDATE_COMPLETE,
                id, key, value
            });
        });
};