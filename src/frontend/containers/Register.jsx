import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRegisterKey, 
    validation, 
    setRegisterStep,
    addPhoto,
    deletePhoto,
    deletePhotoItem,
    changePhotoKey,
    setPhotoActive,
    saveUser
} from 'actions/appActions';
import categories from 'categories.js';
import Operation from 'Register/Operation.jsx';
import styles from 'Register/Input.scss';
import UserInfo from 'Register/UserInfo.jsx';
import UserPhoto from 'Register/UserPhoto.jsx';
import RegisterControls from 'Register/RegisterControls.jsx';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
    return {
        registerInfo: state.register.init,
        validationShow: state.app.validationErrorsShow,
        registerStep: state.app.registerStep,
        photo: state.register.photo,
        onSave: state.register.onSave,
        photoNumber: state.register.photoNumber,
        userRegister: state.app.userRegister,
        dateEnd: state.app.dateEnd
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onChangeRegKey: (key, value) => dispatch(changeRegisterKey(key, value)),
        onValidation: (key) => dispatch(validation(key)),
        onSetRegisterStep: (step) => dispatch(setRegisterStep(step)),
        addPhoto: () => dispatch(addPhoto()),
        changePhotoKey: (id, key, value)=> dispatch(changePhotoKey(id, key, value)),
        setPhotoActive: (id) => dispatch(setPhotoActive(id)),
        deletePhoto: () => dispatch(deletePhoto()),
        deletePhotoItem: (id) => dispatch(deletePhotoItem(id)),
        onSaveUser: (user) => dispatch(saveUser(user)),
        onSetRoute: (route) => dispatch(push(route))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Register extends Component {
    constructor() {
        super();
    }

    onInit = (props) => {
        const { dateEnd, onSetRoute } = props || this.props;
        
        if (!dateEnd.isFetching && dateEnd.value < new Date()) {
            onSetRoute('/')
        }
    }

    componentWillReceiveProps(props) {
        this.onInit(props);     
    }

    componentWillMount() {
        this.onInit();
    }

    render() {
        const { 
            dateEnd,
            onChangeRegKey, 
            validationUserInfo,
            onValidation,
            registerInfo,
            validationShow, //not valid step
            registerStep,
            onSetRegisterStep,
            photo,
            addPhoto,
            changePhotoKey,
            setPhotoActive,
            deletePhoto,
            deletePhotoItem,
            onSaveUser,
            onSave, //save on/off
            photoNumber,
            userRegister
        } = this.props;

        return (
            !dateEnd.isFetching && <div className={styles.form}>
            {
                registerStep === 1 ?
                    <UserInfo 
                        onChangeRegKey={onChangeRegKey}
                        registerInfo={registerInfo}
                        validationShow={validationShow}
                        onValidation={onValidation}
                    /> :
                    <UserPhoto
                        addPhoto={addPhoto}
                        photo={photo}
                        changePhotoKey={changePhotoKey}
                        setPhotoActive={setPhotoActive}
                        deletePhoto={deletePhoto}
                        deletePhotoItem={deletePhotoItem}
                        userRegister={userRegister}
                        validationShow={validationShow}
                        onValidation={onValidation}
                    />
            }
            <RegisterControls 
                onSetRegisterStep={onSetRegisterStep}
                onSave={onSave}
                registerStep={registerStep} 
                onValidation={onValidation}
                onSave={onSave}
                count={photo.length}
                photoNumber={photoNumber}
                userRegister={userRegister}
                onSaveUser={() => !validationShow && onSaveUser()}
            />
            {photoNumber > 0 && 
            <Operation 
                open={onSave} 
                text={`Подождите, выполняется регистрация заявки (${photoNumber})...`} />
            }      
        </div>
        );
    }
}