import app from 'constants/app';

const validation = store => next => action => {

    if (action.type === app.VALIDATION_USER_INFO) {

        const state = store.getState();      
    }

    next(action);

};

export default validation;