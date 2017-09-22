import constants from 'constants/layout';

export const visibleLayout = (state) => {
    return {
        type: constants.VISIBLE_LAYOUT,
        state
    };
};