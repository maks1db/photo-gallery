import constants from 'constants/layoutConstants';

export const visibleLayout = (state) => {
    return {
        type: constants.VISIBLE_LAYOUT,
        state
    };
};

export const activateAdminDashboard = (value) => {
    return {
        type: constants.ADMIN_DASHBOARD,
        value
    };
};
