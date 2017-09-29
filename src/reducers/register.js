import app from 'constants/app';

const initialState = {
    init: {
        name: {
            value: '',
            errorMessage: false,
            required: true,
            minLength:10,
            maxLength:64
        },
        age: {
            value: '',
            errorMessage: false,
            required: true,
            max: 80
        },
        phone: {
            value: '',
            errorMessage: false,
            minLength:11,
            maxLength:20
        },
        email: {
            value: '',
            errorMessage: false,
            minLength:10,
            maxLength:64
        },
        town: {
            value: '',
            errorMessage: false,
            required: true,
            maxLength: 100
        },
        workPlace: {
            value: '',
            errorMessage: false,
            required: true,
            maxLength: 100
        },
        post: {
            value: '',
            errorMessage: false,
            required: true,
            maxLength: 100
        },
        experience: {
            value: '',
            errorMessage: false,
            required: true
        },
        info: {
            value: '',
            errorMessage: false
        }
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
    case app.CHANGE_REGISTER_KEY:
        
        return {...state, 
            init: {...state.init, [action.key]: {
                ...state.init[action.key],
                value: action.value,
            }}
        };
    case app.VALIDATION_REGISTER_KEY: 
        return {...state, 
            init: {...state.init, [action.key]: {
                ...state.init[action.key],
                errorMessage: action.value,
            }}
        };
    }

    return state;
};