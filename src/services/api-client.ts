import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'f986137a46ba4bd4879cae7857c3e680',
    }
})