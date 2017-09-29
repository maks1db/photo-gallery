import app from 'constants/app';

const validation = store => next => action => {

    if (action.type === app.VALIDATION_USER_INFO) {

        const state = store.getState();      

        const type = app.VALIDATION_REGISTER_KEY;
        Object.keys(state.register.init).forEach(key => {
            const item = state.register.init[key];
            if (item.minLength && item.value.length < item.minLength) {
                store.dispatch({
                    type, key,
                    value: `Длина реквизита минимум ${item.minLength} символов` 
                });
            }
            else if (item.maxLength && item.value.length > item.maxLength) {
                store.dispatch({
                    type, key,
                    value: `Длина реквизита максимум ${item.max} символов` 
                });    
            }
            else if (item.min && parseInt(item.value) <= item.min) {
                store.dispatch({
                    type, key,
                    value: `Мин. ${item.min}` 
                });
            }
            else if (item.max && parseInt(item.value) > item.max) {
                store.dispatch({
                    type, key,
                    value: `Макс. ${item.max}`
                }); 
            }
            else if (item.required && !item.value) {
                store.dispatch({
                    type, key,
                    value: 'Не заполнен реквизит' 
                });
            }
            else {
                store.dispatch({
                    type, key,
                    value: false 
                });
            }
        });
    }

    next(action);

};

export default validation;