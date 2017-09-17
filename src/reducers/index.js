import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as toastr} from 'react-redux-toastr';

export default combineReducers({
    toastr,
    routing: routerReducer
});