import constants from 'constants/layoutConstants';

const initialState = {
    visible: true,
    title: '',
    adminDashboard: false,
    onScroll: false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case constants.ON_SCROLL:
        return {...state, onScroll: action.value};
    case constants.VISIBLE_LAYOUT:
        return {...state, visible: action.state};
    case constants.SET_TITLE:
        return {...state, title: action.title};
    case constants.ADMIN_DASHBOARD:
        return {...state, adminDashboard: action.value};
    }

    return state;
};