import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import createHistory from 'history/createBrowserHistory';
import Routes from './routes.jsx';
import { ConnectedRouter } from 'react-router-redux';
import './scss/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const initialState = window.__INITIAL_STATE__ || {};
const history = createHistory();
const store = configureStore(history);

class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (               
            <Provider store={store}>
                <div> 
                    <ConnectedRouter history={history}>
                        <Routes />
                    </ConnectedRouter>  
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