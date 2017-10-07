import app from 'constants/appConstants';
import { saveUser, savePhoto, checkInputs } from 'api/appApi';
import {toastr} from 'react-redux-toastr';

const init = store => next => action => {

    if (action.type === app.SAVE_USER_REQUEST) {

        let state = store.getState();

        if (state.app.validationErrorsShow) {
            next(action);
            store.dispatch({
                type: app.SAVE_USER_COMPLETE
            });
            return;
        }

        checkInputs( 
            state.register.init.phone.value,
            state.register.init.email.value
        )
            .then (x => {

                let existsError = false;
                if (x.data.phone) {
                    toastr.error('Ошибка', `Пользователь с таким телефоном ${state.register.init.phone.value} зарегестрирован`);
                    existsError = true;
                }

                if (x.data.email) {
                    toastr.error('Ошибка', `Пользователь с таким email ${state.register.init.email.value} зарегистрирован`);
                    existsError = true;
                }

                if (existsError) {
                    next(action);
                    store.dispatch({
                        type: app.SAVE_USER_COMPLETE
                    });
                    return;     
                }
                
                // prepare object
                var obj = {};
                Object.keys(state.register.init).forEach(x=> obj[x] = state.register.init[x].value);  
                
                //save user
                saveUser(obj)
                    .then(x => {
                        //save user photo
                        
                        new Promise((resolve) => {
                            const userId = x.data.id;
                            const save = (index) => {
                                if (index === state.register.photo.length) {
                                    resolve('ok');
                
                                    store.dispatch({
                                        type: app.SAVE_USER_COMPLETE
                                    });
                                    store.dispatch({
                                        type: app.USER_REGISTER
                                    });
                                    toastr.success('Спасибо', 'Ваша заявка принята');
                                    return;
                                }
                
                                store.dispatch({
                                    type: app.SAVE_PHOTO_NUMBER,
                                    value: state.register.photo.length - index - 1
                                });
                                const item = state.register.photo[index];
                                obj = { userId };
                                obj.picture = item.picture.value[0];
                                Object.keys(item)
                                    .filter(x => ['id', 'active', 'picture'].indexOf(x) < 0)
                                    .forEach(x=> obj[x] = item[x].value);
                
                                savePhoto(obj)
                                    .then(() => save(++index));
                                
                            };
                            
                            save(0);
                        });
                    });  
            });

    }

    next(action);

};

export default init;