import axios from 'axios';

let API_PREFIX = '';
if (process.env.BROWSER){
    API_PREFIX = 'http://localhost:4000';
}

API_PREFIX += '/api/v1';

export const dateEnd = () => axios.get(`${API_PREFIX}/dateEnd`);

export const saveUser = (user) => axios.post(`${API_PREFIX}/user/item`, {user});

export const savePhoto = (photo) => axios.post(`${API_PREFIX}/user/photo`, {photo});