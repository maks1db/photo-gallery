import constants from 'constants/app';

export const changeRegisterKey = (key, value) => {
    return {
        type: constants.CHANGE_REGISTER_KEY,
        key, value
    };
};

export const validation = () => {
    return {
        type: constants.VALIDATION_USER_INFO
    };
};
