import axios from 'axios';

let API_PREFIX = '';
if (process.env.DEV){
    API_PREFIX = 'http://localhost:4000';
}

API_PREFIX += '/api/v1';

export const dateEnd = () => axios.get(`${API_PREFIX}/dateEnd`);

export const saveUser = (user) => axios.post(`${API_PREFIX}/user/item`, {user});

export const loginUser = (login, password) => axios.post(`${API_PREFIX}/auth/login`, { login, password })
    .then((x) => {
        axios.defaults.headers.common = { 'Authorization': x.data.token };
        return x;
    });

export const logoutUser = () => axios.post(`${API_PREFIX}/auth/logout`)
    .then(() => axios.defaults.headers.common = {'Authorization': ''}); 

export const checkToken = (id) => axios.get(`${API_PREFIX}/login/token/${id}`); 

export const savePhoto = (photo) => {
    let f = new FormData();
    Object.keys(photo).forEach(x => f.append(x, photo[x]));
    
    return axios.post(`${API_PREFIX}/user/photo`, f);
};

export const checkInputs = (phone, email) => axios.get(`${API_PREFIX}/user/checkInputs/`, { params: {email, phone }}) ;