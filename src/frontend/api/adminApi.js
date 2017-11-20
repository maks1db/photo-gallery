import axios from 'axios';

let API_PREFIX = '';
if (process.env.DEV){
    API_PREFIX = 'http://localhost:4000';
}

API_PREFIX += '/api/v1';

export const deleteUser = (id) => axios.delete(`${API_PREFIX}/admin/users/${id}`);

export const getUserPhoto = (id) => axios.get(`${API_PREFIX}/admin/userPhoto/${id}`,{
    responseType: 'arraybuffer'
});

export const download = (route) => axios.get(`${API_PREFIX}/admin/download/${route}`,{
    responseType: 'arraybuffer'
});

export const get = (route) => axios.get(`${API_PREFIX}/admin/get/${route}`);