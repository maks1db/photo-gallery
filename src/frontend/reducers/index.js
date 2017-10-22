import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as toastr} from 'react-redux-toastr';
import layout from './layout';
import app from './app';
import register from './register';
import admin from './admin';
import jury from './jury';

export default combineReducers({
    toastr,
    app,
    layout,
    register,
    routing: routerReducer,
    admin,
    jury
});