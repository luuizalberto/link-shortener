
import axios from "axios";

export const key = "1c571e783442f0f2213804e93976fc0d4fe9b6c6";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
