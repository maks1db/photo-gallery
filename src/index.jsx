import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import configureStore from './store';
import {Router, browserHistory } from 'react-router';
import Routes from './routes.jsx';
import { syncHistoryWithStore } from 'react-router-redux';
import './scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (               
            <Provider store={store}>
                <div> 
                    <Router children={Routes} history={ history } />    
                    <ReduxToastr
                        timeOut={4000}
                        newestOnTop={false}
                        preventDuplicates
                        position="top-right"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar
                    />
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root'));