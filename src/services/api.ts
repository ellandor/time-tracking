import axios from 'axios'


export const API = axios.create({
    baseURL: 'https://a-json-db.herokuapp.com/'
})