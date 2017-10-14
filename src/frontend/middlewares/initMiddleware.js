import layout from 'constants/layoutConstants';
import app from 'constants/appConstants';
import { dateEnd } from 'api/appApi';

const titles = {
    '/register': 'Шаг 1 из 2',
    '/admin/users': 'Заявки участников',
    '/admin/photo': 'Фото участников',
    '/admin/jury': 'Наше жюри',
    '/login': 'Авторизация'
};

const init = store => next => action => {

    if (action.type === '@@router/LOCATION_CHANGE') {
        
        const title = titles[action.payload.pathname];
        store.dispatch({
            type: layout.SET_TITLE,
            title
        });

        //enable admn dashboard
        store.dispatch({
            type: layout.ADMIN_DASHBOARD,
            value: action.payload.pathname.indexOf('/admin') >= 0
        });

        if (action.payload.pathname === '/') {
            
            document.title = 'Туристическая фотовыставка';
        }

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

    next(action);

};

export default init;