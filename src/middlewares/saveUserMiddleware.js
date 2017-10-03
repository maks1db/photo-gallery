import app from 'constants/app';
import { saveUser, savePhoto } from 'api/app';

const init = store => next => action => {

    if (action.type === app.SAVE_USER_REQUEST) {

        let state = store.getState();

        // prepare object
        var obj = {};
        Object.keys(state.register.init).forEach(x=> obj[x] = state.register.init[x].value);  
        
        //save user

        //save photo
        new Promise((resolve) => {

            const save = (index) => {
                if (index === state.register.photo.length) {
                    resolve('ok');
                    return;
                }

                const item = state.register.photo[index];
                obj = {};
                obj.picture = item.picture.value[0];
                Object.keys(item)
                    .filter(x => ['id', 'active', 'picture'].indexOf(x) < 0)
                    .forEach(x=> obj[x] = item[x].value);

                savePhoto(obj);
                index++;
            };
            
            save(0);
        });
    }

    next(action);

};

export default init;