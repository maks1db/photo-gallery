import layout from 'constants/layoutConstants';
import app from 'constants/appConstants';
import { push } from 'react-router-redux';

export default store => next => action => {
    next(action);
    if (action.type === '@@router/LOCATION_CHANGE') {
        
        if (action.payload.pathname.indexOf('admin') > 0) {
            const state = store.getState();

            if (state.app.token === '') {
                store.dispatch(push('/login'));
            }
        }
    }
};