import layout from 'constants/layout';

const init = store => next => action => {
    console.log('init');
    if (action.type === '@@router/LOCATION_CHANGE') {

        let visibleLayout = false;
        if (action.payload.pathname === '/'){
            visibleLayout = true;
        }
        
        store.dispatch({
            type: layout.VISIBLE_LAYOUT,
            state: visibleLayout
        });
    }

    next(action);

};

export default init;