import constants from 'constants/layout';

const initialState = {
    visible: true
};

export default (state = initialState, action) => {
    switch (action.type) {
    case constants.VISIBLE_LAYOUT:
        return {...state, visible: state};
    }

    return state;
};