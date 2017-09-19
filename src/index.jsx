import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Routes from './routes.jsx';
import { syncHistoryWithStore } from 'react-router-redux';
import './scss/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);
const history = syncHistoryWithStore(createBrowserHistory(), store);

class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (               
            <Provider store={store}>
                <div> 
                    <BrowserRouter >
                        <Routes />
                    </BrowserRouter>  
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