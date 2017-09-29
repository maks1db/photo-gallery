import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterComponent from 'Register/Register.jsx';
import { changeRegisterKey, validation } from 'actions/app';

function mapStateToProps(state) {
    return {
        registerInfo: state.register.init
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onChangeRegKey: (key, value) => dispatch(changeRegisterKey(key, value)),
        onValidation: () => {
            dispatch(validation())
        }
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
                onValidation={onValidation}
                onChangeRegKey={onChangeRegKey}
                registerInfo={registerInfo}
            />
        );
    }
}