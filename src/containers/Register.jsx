import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterComponent from 'Register/Register.jsx';
import { changeRegisterKey, 
    validation, 
    setRegisterStep,
    addPhoto,
    deletePhoto,
    changePhotoKey
} from 'actions/app';

function mapStateToProps(state) {
    return {
        registerInfo: state.register.init,
        validationShow: state.app.validationErrorsShow,
        registerStep: state.app.registerStep,
        photo: state.register.photo
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onChangeRegKey: (key, value) => dispatch(changeRegisterKey(key, value)),
        onValidation: (toastr) => dispatch(validation(toastr)),
        onSetRegisterStep: (step) => dispatch(setRegisterStep(step)),
        addPhoto: () => dispatch(addPhoto()),
        changePhotoKey: (id, key, value)=> dispatch(changePhotoKey(id, key, value))
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
            registerInfo,
            validationShow,
            registerStep,
            onSetRegisterStep,
            photo,
            addPhoto,
            changePhotoKey
        } = this.props;

        return (
            <RegisterComponent 
                photo={photo}
                addPhoto={addPhoto}
                registerStep={registerStep}
                validationShow={validationShow}
                onValidation={onValidation}
                onChangeRegKey={onChangeRegKey}
                registerInfo={registerInfo}
                onSetRegisterStep={onSetRegisterStep}
                changePhotoKey={changePhotoKey}
            />
        );
    }
}