import layout from 'constants/layout';

const titles = {
    '/': 'Фотовыставка',
    '/register': 'Подача заявки'
};

const init = store => next => action => {

    if (action.type === '@@router/LOCATION_CHANGE') {
        
        const title = titles[action.payload.pathname];
        store.dispatch({
            type: layout.SET_TITLE,
            title
        });
        document.title = title;

        store.dispatch({
            type: layout.SHOW_MAIN_LINK,
            show: action.payload.pathname !== '/'
        });
        
    }

    next(action);

};

export default init;