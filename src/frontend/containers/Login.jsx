import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from 'Login/Login.jsx';
import { loginUser } from 'actions/appActions';

function mapStateToProps(state) {
    return {
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (login, password) => dispatch(loginUser(login, password))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginContainer extends Component {
    constructor() {
        super();

        this.state = {
            login: '',
            password: ''
        }
    }

    onChangeKey = (key, value) => this.setState({[key]: value});

    render() {

        const { 
            onLogin
        } = this.props;

        const {
            login, 
            password
        } = this.state;

        return (
            <Login 
                onLogin={() => onLogin(login, password)}
                login={login}
                password={password}
                onChangeKey={this.onChangeKey}
            />    
        );
    }
}