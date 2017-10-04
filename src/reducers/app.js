import app from 'constants/app';

const initialState = {
    dateEnd: {
        isFetching: false,
        value: undefined
    },
    role: 'user',
    validationErrorsShow: false,
    registerStep: 1,
    userRegister: false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case app.REQUEST_DATE_END:
        return {...state, 
            dateEnd: {...state.dateEnd, isFetching: true}
        };
    case app.RECEIVE_DATE_END:
        return {...state, 
            dateEnd: {...state.dateEnd, isFetching: false, value: new Date(action.value)}
        };
    case app.VALIDATION_ERRORS_SHOW:
        return {...state,
            validationErrorsShow: action.validation    
        };
    case app.CHANGE_REGISTER_STEP:
        return {...state,
            registerStep: action.step    
        };
    case app.USER_REGISTER:
        return {...state,
            userRegister:true    
        };
    }

    return state;
};