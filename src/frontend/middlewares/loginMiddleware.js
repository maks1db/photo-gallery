import app from 'constants/appConstants';
import { push } from 'react-router-redux';
import axios from 'axios';
import { checkToken } from 'api/appApi';

export default store => next => action => {
    if (action.type === '@@router/LOCATION_CHANGE') {
        
        const state = store.getState();
        if (action.payload.pathname.indexOf('admin') > 0) {
            

            if (state.app.token === '') {
                store.dispatch(push('/login'));
                return;
            }
        }
        //check token
        if (state.app.token === '') {
            let token = localStorage.getItem(app.TOKEN_LOCAL_STORAGE);

            if (token) {
                checkToken(token)
                    .then(x => {
                        store.dispatch({
                            type: app.LOGIN_RECEIVE,
                            token: x.data.token,
                            role: x.data.role
                        });
                        action.role = x.data.role;
                        next(action);

                        //set autorize
                        axios.defaults.headers.common = {
                            'Authorization': `${x.data.token}`,
                        }; 

                        if (action.payload.pathname === '/login') {
                
                            if (x.data.role === 'admin') {
                                store.dispatch(push('/admin/users'));
                                return;
                            }
                            else if (x.data.role === 'jury') {
                                store.dispatch(push('/jury'));
                                return;   
                            }
                        }
                    });
            }
            else {
                next(action);
            }
        }
        else {
            next(action);
        }
    }

    if (action.type === app.LOGIN_RECEIVE) {
        localStorage.setItem(app.TOKEN_LOCAL_STORAGE, action.token);   
    }

    if (action.type === app.USER_REDIRECT) {
        const state = store.getState();
        if (state.app.role.indexOf('admin') >= 0) {
            store.dispatch(push('/admin/users'));    
        } 
        else if (state.app.role.indexOf('jury') >= 0) {
            store.dispatch(push('/jury'));    
        } 
    }
    next(action);
};