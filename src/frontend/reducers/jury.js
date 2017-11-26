import constants from 'constants/juryConstants';

const initialState = {  
    activeCategory: 0,
    items: { isFetching: false, data: []},
    rating: { isFetching: false, data: []},
    modal: {
        open: false,
        index: -1,
        commentActive: false,
        commentMessage: ''
    },
    ratingUpdate: false
};

function updateRating(state, id, key, value) {
    let obj = state.find(x => x.photoId === id) || {};
    let arr = state.filter(x => x.photoId !== id);
    obj = {
        ...obj,
        photoId: id,
        [key]: value
    };

    arr.push(obj);

    return arr;
}

export default (state = initialState, action) => {
    switch (action.type) {
    case constants.CHANGE_ACTIVE_CATEGORY:
        return {...state, 
            activeCategory: action.value
        };
    case constants.ITEMS_REQUEST:
        return {...state, 
            items: { isFetching: true, data: []}
        };
    case constants.ITEMS_RECEIVE:
        return {...state, 
            items: { isFetching: false, data: action.items}
        };
    case constants.RATING_REQUEST:
        return {...state, 
            rating: { isFetching: true, data: []}
        };
    case constants.RATING_RECEIVE:
        return {...state, 
            rating: { isFetching: false, data: action.items.map(x =>{
                return {
                    photoId: x.photoId,
                    value: x.value,
                    comment: x.comment
                };
            })}
        };
    case constants.RATING_UPDATE:
        return {...state, ratingUpdate: true};
    case constants.RATING_UPDATE_COMPLETE:
        return {...state,
            ratingUpdate: false,
            rating: { isFetching: false, data: updateRating(state.rating.data,
                action.id, action.key, action.value) 
            }};
    case constants.SET_MODAL:
        return {...state,
            modal: {
                ...state.modal, open: action.value, commentMessage: '', commentActive: false
            }
        };
    case constants.SET_MODAL_IMG:
        return {...state,
            modal: {
                ...state.modal, index: action.value, commentMessage: ''
            }
        };
    case constants.CHANGE_COMMENT:
        return {...state,
            modal: {
                ...state.modal, commentMessage: action.value
            }
        };
    case constants.COMMENT_ACTIVE:
        return {...state,
            modal: {
                ...state.modal, commentActive: action.value
            }
        };
    } 
    return state;
};