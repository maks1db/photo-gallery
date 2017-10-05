import app from 'constants/app';
import layout from 'constants/layout';
import {toastr} from 'react-redux-toastr';

const validation = store => next => action => {

    function validationItem(item, type, key, id) {
        let hasError = false;
        if (item.minLength && item.value.length < item.minLength) {
            hasError = true;
            store.dispatch({
                type, key, id,
                value: `Длина реквизита минимум ${item.minLength} символов` 
            });
        }
        else if (item.maxLength && item.value.length > item.maxLength) {
            hasError = true;
            store.dispatch({
                type, key,id,
                value: `Длина реквизита максимум ${item.max} символов` 
            });    
        }
        else if (item.min !== undefined && parseInt(item.value) <= item.min) {
            hasError = true;
            store.dispatch({
                type, key,id,
                value: `Мин. значение ${item.min}` 
            });
        }
        else if (item.max !== undefined && parseInt(item.value) > item.max) {
            hasError = true;
            store.dispatch({
                type, key,id,
                value: `Макс. значение ${item.max}`
            }); 
        }
        else if (item.forbidden && item.forbidden.filter(x => item.value.indexOf(x) >= 0).length) {
            hasError = true;
            store.dispatch({
                type, key,id,
                value: `Недопустимые символы ${item.forbidden.join(', ')}`
            });
        }
        else if (item.required && !item.value) {
            hasError = true;
            store.dispatch({
                type, key,id,
                value: 'Не заполнен реквизит' 
            });
        }
        else {
            store.dispatch({
                type, key,id,
                value: false 
            });
        }

        return hasError;
    }

    //toastrError означает, что проверка валидации вызвана из изменения реквизита
    let hasError = false, hasErrorConfirm = false;
    if (action.type === app.VALIDATION_USER_INFO) {
        const state = store.getState();      

        if (state.app.registerStep === 1) {
            const type = app.VALIDATION_REGISTER_KEY;
            
            Object.keys(state.register.init).forEach(key => {
                const item = state.register.init[key];
                if (validationItem(item, type, key)) {
                    hasError = true;
                }  
            });
    
            if (!state.register.init.confirm.value && action.toastrError) {
                toastr.error('Ошибка', 'Необходимо разрешить использование указанных данных.'); 
                hasErrorConfirm = true;
            }

            if (!hasError && !hasErrorConfirm && action.toastrError) {
                store.dispatch({
                    type: app.CHANGE_REGISTER_STEP,
                    step: 2
                });
            }

            
        }
        else if (state.app.registerStep === 2) {
            const type = app.VALIDATION_PHOTO_KEY; 
            
            state.register.photo.forEach(x=> {
                Object.keys(x).forEach(key => {
                    if (['id','active'].indexOf(key) < 0 && validationItem(x[key], type, key, x.id)) {
                        hasError = true; 
                    }
                });
            });
        }

        //DEMO
        store.dispatch({
            type: app.VALIDATION_ERRORS_SHOW,
            validation: hasError 
        });

        if (action.toastrError) {
            if (hasError) {
                toastr.error('Ошибка', 'Заполните правильно необходимые реквизиты');
            } 
        }
        
    }

    next(action);

};

export default validation;