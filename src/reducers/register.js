import app from 'constants/app';

const initialState = {
    photo: [],
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
    case app.ADD_PHOTO: 
        return {...state, 
            photo: [...state.photo, {
                active: false,
                id: new Date().valueOf(),
                picture: {value: null, errorMessage: false},
                title: {value: '', errorMessage: false},
                description: {value: '', errorMessage: false},
                year: {value: 0, errorMessage: false},
                info: {value: '', errorMessage: false}
            }]
        };
    case app.CHANGE_PHOTO_KEY: 
        return {...state, 
            photo: state.photo.map( x=> {
                if (x.id === action.id) {
                    x[action.key].value = action.value;
                }
                return x;
            })
        };
    }

    return state;
};