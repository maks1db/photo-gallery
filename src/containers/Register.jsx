import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterComponent from 'Register/Register.jsx';
import { changeRegisterKey } from 'actions/app';

function mapStateToProps(state) {
    return {
        registerInfo: state.app.register
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onChangeRegKey: (key, value) => dispatch(changeRegisterKey(key, value))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Register extends Component {
    constructor() {
        super();
    }

    render() {
        const { onChangeRegKey, registerInfo} = this.props;
        return (
            <RegisterComponent 
                onChangeRegKey={onChangeRegKey}
                registerInfo={registerInfo}
            />
        );
    }
}