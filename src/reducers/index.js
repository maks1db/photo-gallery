import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as toastr} from 'react-redux-toastr';
import layout from './layout';
import app from './app';

export default combineReducers({
    toastr,
    app,
    layout,
    routing: routerReducer
});