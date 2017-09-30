import app from 'constants/app';
import {toastr} from 'react-redux-toastr';

const validation = store => next => action => {

    if (action.type === app.VALIDATION_USER_INFO) {

        const state = store.getState();      

        if (state.app.registerStep === 1) {
            const type = app.VALIDATION_REGISTER_KEY;
            let hasError = false;
            Object.keys(state.register.init).forEach(key => {
                const item = state.register.init[key];
                if (item.minLength && item.value.length < item.minLength) {
                    hasError = true;
                    store.dispatch({
                        type, key,
                        value: `Длина реквизита минимум ${item.minLength} символов` 
                    });
                }
                else if (item.maxLength && item.value.length > item.maxLength) {
                    hasError = true;
                    store.dispatch({
                        type, key,
                        value: `Длина реквизита максимум ${item.max} символов` 
                    });    
                }
                else if (item.min && parseInt(item.value) <= item.min) {
                    hasError = true;
                    store.dispatch({
                        type, key,
                        value: `Мин. ${item.min}` 
                    });
                }
                else if (item.max && parseInt(item.value) > item.max) {
                    hasError = true;
                    store.dispatch({
                        type, key,
                        value: `Макс. ${item.max}`
                    }); 
                }
                else if (item.required && !item.value) {
                    hasError = true;
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
    
            //DEMO
            hasError = false;
            store.dispatch({
                type: app.VALIDATION_ERRORS_SHOW,
                validation: hasError 
            });
            if (hasError && action.toastrError) {
                toastr.error('Ошибка', 'Заполните правильно необходимые реквизиты');
            }
    
            if (!hasError) {
                store.dispatch({
                    type: app.CHANGE_REGISTER_STEP,
                    step: 2
                });
            }
        }
        else if (state.app.registerStep === 2) {
            
        }
        
    }

    next(action);

};

export default validation;