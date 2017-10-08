import constants from 'constants/adminDashboard';

const initialState = {
    items: {isFetching: false, data: []},
    subItems: {isFetching: false, data: []},
    itemResult: {isFetching: false, data: {}},
    modify: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
    case constants.REQUEST_ITEMS:
        return {...state, 
            items: { isFetching: true, data: [] },
            itemResult: {isFetching: false, data: {}},
            modify: {}
        };
    case constants.RECEIVE_ITEMS:
        return {...state, 
            items: { isFetching: false, data: action.items}
        };
    case constants.REQUEST_SUBITEMS:
        return {...state, 
            subItems: { isFetching: true, data: [] },
            itemResult: {isFetching: false, data: {}},
            modify: {}
        };
    case constants.RECEIVE_SUBITEMS:
        return {...state, 
            subItems: { isFetching: false, data: action.items}
        };
    case constants.REQUEST_ITEM_RESULT:
        return {...state,
            itemResult: {isFetching: true, data: {}},
            modify: {}   
        };
    case constants.RECEIVE_ITEM_RESULT:
        return {...state,
            itemResult: {isFetching: false, data: action.result}   
        };
    case constants.SET_ITEM_ACTIVE:
        return {...state,
            items: {...state.items, data: state.items.data.map(x => {
                x.active = x._id === action.id;
                return x;
            })}
        };
    case constants.SET_MODIFY:
        return {...state,
            modify: {
                ...state.modify,
                [action.key]: action.value
            }
        };
    case constants.CHANGE_ITEMS_KEY:
        return {...state,
            items: {
                ...state.items, data: state.items.data.map(x => {
                    if (x._id === action.id) {
                        x[action.key] = action.value;
                    }

                    return x;
                })
            }
        };
        
    }

    return state;
};