import layout from 'constants/layout';
import app from 'constants/app';
import { dateEnd } from 'api/app';

const titles = {
    '/': 'Фотовыставка',
    '/register': 'Подача заявки (1 из 2)'
};

const init = store => next => action => {

    if (action.type === '@@router/LOCATION_CHANGE') {
        
        const title = titles[action.payload.pathname];
        store.dispatch({
            type: layout.SET_TITLE,
            title
        });

        store.dispatch({
            type: layout.SHOW_MAIN_LINK,
            show: action.payload.pathname !== '/'
        });
        
        if (action.payload.pathname === '/') {
            const state = store.getState();

            if (!state.app.dateEnd.value) {
                store.dispatch({
                    type: app.REQUEST_DATE_END
                });
                dateEnd()
                    .then(x => {
                        store.dispatch({
                            type: app.RECEIVE_DATE_END,
                            value: x.data.date
                        });   
                    });
            }
        }
    }

    next(action);

};

export default init;