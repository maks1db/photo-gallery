import constants from 'constants/adminDashboard';

const initialState = {
    tab: 1
};

export default (state = initialState, action) => {
    switch(action.type) {
    case constants.SET_TAB:
        return {...state, tab: action.tab};
    }

    return state;
};