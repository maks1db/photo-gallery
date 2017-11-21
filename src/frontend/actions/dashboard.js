import adminConst from 'constants/adminDashboard';

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