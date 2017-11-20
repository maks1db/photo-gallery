import constants from 'constants/adminDashboard';

const initialState = {
    tab: 0,
    photoTab: 0
};

export default (state = initialState, action) => {
    switch(action.type) {
    case constants.SET_TAB:
        return {...state, tab: action.tab};
    case constants.SET_PHOTO_TAB:
        return {...state, photoTab: action.tab};
    }

    return state;
};