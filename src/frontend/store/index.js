import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers';
import initMiddleware from 'middlewares/initMiddleware';
import validationMiddleware from 'middlewares/validationMiddleware';
import { routerMiddleware } from 'react-router-redux';
import saveUserMiddleware from 'middlewares/saveUserMiddleware';
import titleMiddleware from 'middlewares/titleMiddleware';
import loginMiddleware from 'middlewares/loginMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(history) {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(
            loginMiddleware,
            thunkMiddleware,
            routerMiddleware(history),
            initMiddleware,
            validationMiddleware,
            saveUserMiddleware,
            titleMiddleware
        ))
    );

    return store;
}
