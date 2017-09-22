import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as toastr} from 'react-redux-toastr';
import layout from './layout';

export default combineReducers({
    toastr,
    layout,
    routing: routerReducer
});