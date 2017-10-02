import app from 'constants/app';
import { saveUser, savePhoto } from 'api/app';

const init = store => next => action => {

    if (action.type === app.SAVE_USER_REQUEST) {
        
    }

    next(action);

};

export default init;