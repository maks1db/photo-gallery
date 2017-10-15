import constants from 'constants/juryConstants';

export const changeCategory = (value) => {
    return {
        type: constants.CHANGE_ACTIVE_CATEGORY,
        value
    };
};