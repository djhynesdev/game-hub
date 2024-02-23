import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '234eec22a37143898001ba13bc2be8fd'
    }
    })