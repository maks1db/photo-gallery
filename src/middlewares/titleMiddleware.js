import layout from 'constants/layout';
import app from 'constants/app';

const init = store => next => action => {

    if (action.type === layout.SET_TITLE) {  
        document.title = action.title;
    }
    if (action.type === app.CHANGE_REGISTER_STEP) {
        const title = `Подача заявки (${action.step} из 2)`;
        store.dispatch({
            type: layout.SET_TITLE,
            title
        });
    }

    next(action);

};

export default init;