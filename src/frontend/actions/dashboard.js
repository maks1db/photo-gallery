import adminConst from 'constants/adminDashboard';

export const setTab = (tab) => {
    return {
        type: adminConst.SET_TAB,
        tab
    };
};