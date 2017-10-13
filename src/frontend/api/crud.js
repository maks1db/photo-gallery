import axios from 'axios';

let API_PREFIX = '';
if (process.env.DEV){
    API_PREFIX = 'http://localhost:4000';
}

API_PREFIX += '/api/v1';

class Crud {

    constructor(entity) {
        this.entity = entity;
    }

    /**
     * Get entity items
     * @param {Object} params (condition/sort/limit/offset)
     */
    get(params) {

        if (!params){
            params = {};
        }

        return axios.get(`${API_PREFIX}/${this.entity}`, {
            params
        });
    }

    /**
     * Get object by id
     * @param {int} id
     */
    getItem(id) {
        return axios.get(`${API_PREFIX}/${this.entity}/${id}`);
    }

    /**
     * Post object
     * @param {object} obj
     */
    post(obj) {
        return axios.post(`${API_PREFIX}/${this.entity}`, obj);
    }

    /**
     * Patch object by id
     * @param {int} id
     * @param {object} obj
     */
    patch(id, obj) {
        return axios.patch(`${API_PREFIX}/${this.entity}/${id}`, obj);
    }  
    
    delete(id) {
        console.log(this.entity);
        return axios.delete(`${API_PREFIX}/${this.entity}/${id}`); 
    }
}

module.exports = Crud;