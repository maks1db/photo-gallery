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
            min:0,
            max: 80,
            maxLength:2,
        },
        phone: {
            value: '',
            errorMessage: false,
            minLength:11,
            maxLength:20,
            forbidden: ['_']
        },
        email: {
            value: '',
            errorMessage: false,
            minLength:10,
            maxLength:64,
            regexp: {
                reg: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/gi,
                message: 'Введите корректный e-mail'
            }
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
        },
        confirm: {
            value: false,
            errorMessage: false,
            required: true
        }
    },
    onSave: false,
    photoNumber: 0
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
                picture: {value: null, errorMessage: false, required:true},
                title: {value: '', errorMessage: false, required:true},
                description: {value: '', errorMessage: false, required:true},
                year: {value: 0, 
                    errorMessage: false, 
                    max:new Date().getFullYear(), 
                    min:2000,
                    required:true,
                    maxLength: 4
                },
                info: {value: '', errorMessage: false, required:true},
                category: {value: 'Категория 2', errorMessage: false, required:true}
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
    case app.VALIDATION_PHOTO_KEY: 
        return {...state, 
            photo: state.photo.map( x=> {
                if (x.id === action.id) {
                    x[action.key].errorMessage = action.value;
                }
                return x;
            })
        };
    case app.SET_PHOTO_ACTIVE: 
        return {...state, 
            photo: state.photo.map( x=> {
                x.active = x.id === action.id;
                return x;
            })
        };
    case app.SAVE_PHOTO_NUMBER: 
        return {...state, 
            photoNumber: action.value      
        };
    case app.DELETE_PHOTO: 
        return {...state, 
            photo: state.photo.filter( x=> !x.active)
        };
    case app.SAVE_USER_REQUEST: 
        return {...state, 
            onSave: true
        };
    case app.SAVE_USER_COMPLETE: 
        return {...state, 
            onSave: false
        };
    case app.DELETE_PHOTO_ITEM: 
        return {...state, 
            photo: state.photo.map( x=> {
                if (x.id === action.id) {
                    x.picture.value = null;
                    x.picture.errorMessage = null;
                }
                return x;
            })
        };
    }

    return state;
};