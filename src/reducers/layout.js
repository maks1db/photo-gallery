import constants from 'constants/layout';

const initialState = {
    visible: true,
    title: '',
    showMainLink: false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case constants.VISIBLE_LAYOUT:
        return {...state, visible: action.state};
    case constants.SET_TITLE:
        return {...state, title: action.title};
    case constants.SHOW_MAIN_LINK:
        return {...state, showMainLink: action.show};
    }

    return state;
};