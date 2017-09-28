import axios from 'axios';

let API_PREFIX = '';
if (process.env.BROWSER){
    API_PREFIX = 'http://localhost:4000';
}

API_PREFIX += '/api/v1';

export const dateEnd = () => axios.get(`${API_PREFIX}/dateEnd`);