import categories from 'categories.js';
import app from 'constants/appConstants';
import { toastr } from 'react-redux-toastr';

function validationItem(store, item, type, key, id) {
    let hasError = false;
    if (item.minLength && item.value.length < item.minLength) {
        hasError = true;
        store.dispatch({
            type,
            key,
            id,
            value: `Длина реквизита минимум ${item.minLength} сим.`
        });
    } else if (item.maxLength && item.value.length > item.maxLength) {
        hasError = true;
        store.dispatch({
            type,
            key,
            id,
            value: `Длина реквизита максимум ${item.maxLength} сим.`
        });
    } else if (item.min !== undefined && parseInt(item.value) <= item.min) {
        hasError = true;
        store.dispatch({
            type,
            key,
            id,
            value: `Мин. значение ${item.min}`
        });
    } else if (item.max !== undefined && parseInt(item.value) > item.max) {
        hasError = true;
        store.dispatch({
            type,
            key,
            id,
            value: `Макс. значение ${item.max}`
        });
    } else if (
        item.forbidden &&
        item.forbidden.filter(x => item.value.indexOf(x) >= 0).length
    ) {
        hasError = true;
        store.dispatch({
            type,
            key,
            id,
            value: `Недопустимые символы "${item.forbidden.join(', ')}"`
        });
    } else if (
        item.regexp &&
        String(item.value.match(item.regexp.reg)) === 'null'
    ) {
        hasError = true;
        store.dispatch({
            type,
            key,
            id,
            value: item.regexp.message
        });
    } else if (item.required && !item.value) {
        hasError = true;
        store.dispatch({
            type,
            key,
            id,
            value: 'Не заполнен реквизит'
        });
    } else {
        store.dispatch({
            type,
            key,
            id,
            value: false
        });
    }

    return hasError;
}

const validation = store => next => action => {
    //toastrError означает, что проверка валидации вызвана из изменения реквизита
    let hasError = false,
        hasErrorConfirm = false;
    if (action.type === app.VALIDATION_USER_INFO) {
        const state = store.getState();
        if (state.app.userRegister) {
            if (state.app.registerStep === 1) {
                store.dispatch({
                    type: app.CHANGE_REGISTER_STEP,
                    step: 2
                });
            }
            next(action);
            return;
        }

        const mainKey = action.key;
        if (state.app.registerStep === 1) {
            const type = app.VALIDATION_REGISTER_KEY;

            Object.keys(state.register.init)
                .filter(x => x !== 'confirm')
                .forEach(key => {
                    const item = state.register.init[key];
                    if (validationItem(store, item, type, key)) {
                        hasError = true;
                    }
                });

            if (!state.register.init.confirm.value && mainKey === '') {
                toastr.error(
                    'Ошибка',
                    'Необходимо разрешить использование указанных данных.'
                );
                hasErrorConfirm = true;
            }

            if (!hasError && !hasErrorConfirm && mainKey === '') {
                store.dispatch({
                    type: app.CHANGE_REGISTER_STEP,
                    step: 2
                });
            }
        } else if (state.app.registerStep === 2) {
            const type = app.VALIDATION_PHOTO_KEY;

            const cat_1 = state.register.photo.filter(
                x => x.category.value === categories[0]
            ).length;
            const cat_2 = state.register.photo.filter(
                x => x.category.value === categories[1]
            ).length;
            const cat_3 = state.register.photo.filter(
                x => x.category.value === categories[2]
            ).length;
            const cat_4 = state.register.photo.filter(
                x => x.category.value === categories[3]
            ).length;
            const cat_5 = state.register.photo.filter(
                x => x.category.value === categories[4]
            ).length;

            if (cat_1 + cat_2 > 3) {
                toastr.error(
                    'Ошибка',
                    `Количество фото категории "${categories[0]}" и "${
                        categories[1]
                    }" не должно превышать 3 шт.`
                );
                hasError = true;
            }
            if (cat_3 + cat_4 > 2) {
                toastr.error(
                    'Ошибка',
                    `Количество фото категории "${categories[2]}" и "${
                        categories[3]
                    }" не должно превышать 2 шт.`
                );
                hasError = true;
            }
            if (cat_5 > 1) {
                toastr.error(
                    'Ошибка',
                    `Количество фото категории "${
                        categories[4]
                    }" не должно превышать 1 шт.`
                );
                hasError = true;
            }

            state.register.photo.forEach(x => {
                Object.keys(x).forEach(key => {
                    if (
                        ['id', 'active'].indexOf(key) < 0 &&
                        validationItem(store, x[key], type, key, x.id)
                    ) {
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

        if (mainKey === '') {
            if (hasError) {
                toastr.error(
                    'Ошибка',
                    'Заполните правильно необходимые реквизиты'
                );
            }
        }
    }

    next(action);
};

export default validation;
