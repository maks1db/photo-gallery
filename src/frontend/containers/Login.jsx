import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from 'Login/Login.jsx';

function mapStateToProps(state) {
    return {
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginContainer extends Component {
    constructor() {
        super();
    }

    render() {

        // const { 

        // } = this.props;
        return (
            <Login />    
        );
    }
}