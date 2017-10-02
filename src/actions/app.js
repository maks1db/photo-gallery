import constants from 'constants/app';
import { saveUser as saveUserApi} from 'api/app';

export const saveUser = () => dispatch => {
    dispatch({
        type: constants.SAVE_USER_REQUEST
    });
};

export const changeRegisterKey = (key, value) => {
    return {
        type: constants.CHANGE_REGISTER_KEY,
        key, value
    };
};

export const validation = (toastrError = true) => {
    return {
        type: constants.VALIDATION_USER_INFO,
        toastrError
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