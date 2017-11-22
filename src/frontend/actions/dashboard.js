import adminConst from 'constants/adminDashboard';
import { get } from 'api/adminApi';
import categories from 'categories.js';

export const setTab = (tab) => {
    return {
        type: adminConst.SET_TAB,
        tab
    };
};

export const setPhotoTab = (tab) => {
    return {
        type: adminConst.SET_PHOTO_TAB,
        tab
    };
};

export const getRatingPhoto = category => dispatch => {
    dispatch({
        type: adminConst.REQUEST_DASHBOARD_PHOTO
    });

    let obj = {};
    if (category - 1 >= 0) {
        obj.category = categories[category - 1];
    }
    else if (category === 0){
        obj.category = 'all';
    }
    else if (category === -1) {
        obj.category = 'empty';
    }

    get('rating', obj)
        .then(x => {
            dispatch({
                type: adminConst.RECEIVE_DASHBOARD_PHOTO,
                items: x.data
            });
        });
};