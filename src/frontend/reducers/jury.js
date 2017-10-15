import constants from 'constants/juryConstants';

const initialState = {  
    activeCategory: 0,
    items: { isFetching: false, data: []}
};

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
    } 
    
  
    
    return state;
};