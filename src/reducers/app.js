import app from 'constants/app';

const initialState = {
    dateEnd: {
        isFetching: false,
        value: undefined
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
    }

    return state;
};