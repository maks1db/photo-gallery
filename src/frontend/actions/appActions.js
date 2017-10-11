import constants from 'constants/appConstants';
import { loginUser as loginUserApi } from 'api/appApi';

export const saveUser = () => dispatch => {
    dispatch({
        type: constants.SAVE_USER_REQUEST
    });
};

export const loginUser = (login, password) => dispatch => {
    dispatch({
        type: constants.LOGIN_REQUEST
    });

    loginUserApi(login, password)
        .then(x => {
            dispatch({
                type: constants.LOGIN_RECEIVE
            });   
        });
};

export const changeRegisterKey = (key, value) => {
    return {
        type: constants.CHANGE_REGISTER_KEY,
        key, value
    };
};

export const validation = (key = '') => {
    return {
        type: constants.VALIDATION_USER_INFO,
        key
    };
};

export const setRegisterStep = (step) => {
    return {
        type: constants.CHANGE_REGISTER_STEP,
        step
    };
};

export const addPhoto = () => {
    return {
        type: constants.ADD_PHOTO
    };
};

export const changePhotoKey = (id, key, value) => {
    return {
        type: constants.CHANGE_PHOTO_KEY,
        id, key, value
    };
};

export const setPhotoActive = (id) => {
    return {
        type: constants.SET_PHOTO_ACTIVE,
        id
    };
};

export const deletePhoto = () => {
    return {
        type: constants.DELETE_PHOTO
    };
};

export const deletePhotoItem = (id) => {
    return {
        type: constants.DELETE_PHOTO_ITEM, id
    };
};