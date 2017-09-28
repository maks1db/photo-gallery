import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers';
import initMiddleware from 'middlewares/initMiddleware';
import validationMiddleware from 'middlewares/validationMiddleware';
import { routerMiddleware } from 'react-router-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(history) {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(
            thunkMiddleware,
            routerMiddleware(history),
            initMiddleware,
            validationMiddleware
        ))
    );

    return store;
}
