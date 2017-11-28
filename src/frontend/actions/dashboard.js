import adminConst from 'constants/adminDashboard';
import { get, selectPhoto as selectPhotoApi } from 'api/adminApi';
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

export const selectPhoto = (id, selected) => dispatch => {
    dispatch({
        type: adminConst.SELECT_PHOTO_REQUEST
    });

    selectPhotoApi(id, selected)
        .then(() => {
            dispatch({
                type: adminConst.SELECT_PHOTO_COMPLETE,
                selected,
                id
            });
        });
};

export const requestDownload = () => {
    return {
        type: adminConst.DOWNLOAD_FILE_REQUEST
    };
};

export const receiveDownload = () => {
    return {
        type: adminConst.DOWNLOAD_FILE_RECEIVE
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
    else if (category === -2) {
        obj.category = 'comments';
    }

    get('rating', obj)
        .then(x => {
            dispatch({
                type: adminConst.RECEIVE_DASHBOARD_PHOTO,
                items: x.data
            });
        });
};