import app from 'constants/app';

const initialState = {
    dateEnd: {
        isFetching: false,
        value: undefined
    },
    register: {
        name: {
            value: '',
            errorMessage: false
        },
        age: {
            value: '',
            errorMessage: false
        },
        phone: {
            value: '',
            errorMessage: false
        },
        email: {
            value: '',
            errorMessage: false
        },
        town: {
            value: '',
            errorMessage: false
        },
        workPlace: {
            value: '',
            errorMessage: false
        },
        post: {
            value: '',
            errorMessage: false
        },
        experience: {
            value: '',
            errorMessage: false
        },
        info: {
            value: '',
            errorMessage: false
        }
    }
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
    case app.CHANGE_REGISTER_KEY:
        
        return {...state, 
            register: {...state.register, [action.key]: {
                ...state.register[action.key],
                value: action.value,
            }}
        };
    }

    return state;
};