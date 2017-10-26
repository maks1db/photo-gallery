import layout from 'constants/layoutConstants';
import app from 'constants/appConstants';

const init = store => next => action => {

    if (action.type === layout.SET_TITLE && action.title) {  
        document.title = action.title;
    }
    if (action.type === app.CHANGE_REGISTER_STEP) {
        const title = `Шаг (${action.step} из 2)`;
        store.dispatch({
            type: layout.SET_TITLE,
            title
        });
    }

    next(action);

};

export default init;