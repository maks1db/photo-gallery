import constants from 'constants/adminDashboard';

const initialState = {
    tab: 0,
    photoTab: 0,
    photo: {isFetching: false, data: []},
    downloadFile: false
};

export default (state = initialState, action) => {
    switch(action.type) {
    case constants.SET_TAB:
        return {...state, tab: action.tab};
    case constants.SET_PHOTO_TAB:
        return {...state, photoTab: action.tab};
    case constants.REQUEST_DASHBOARD_PHOTO:
        return {...state, photo: {isFetching:true, data: []}};
    case constants.RECEIVE_DASHBOARD_PHOTO:
        return {...state, photo: {isFetching:false, data: action.items}};
    case constants.DOWNLOAD_FILE_REQUEST:
        return {...state, downloadFile: true};
    case constants.DOWNLOAD_FILE_RECEIVE:
        return {...state, downloadFile: false};
    }

    return state;
};