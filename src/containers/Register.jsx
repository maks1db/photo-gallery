import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterComponent from 'Register/Register.jsx';
import { changeRegisterKey, checkRegisterKey } from 'actions/app';

function mapStateToProps(state) {
    return {
        registerInfo: state.app.register
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onChangeRegKey: (key, value) => dispatch(changeRegisterKey(key, value)),
        onValidation: (key, value, init) => dispatch(checkRegisterKey(key, value, init)),
        validationUserInfo: () => {}
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Register extends Component {
    constructor() {
        super();
    }

    render() {
        const { 
            onChangeRegKey, 
            validationUserInfo,
            onValidation,
            registerInfo} = this.props;
        return (
            <RegisterComponent 
                validationUserInfo={validationUserInfo}
                onValidation={onValidation}
                onChangeRegKey={onChangeRegKey}
                registerInfo={registerInfo}
            />
        );
    }
}