import axios from "axios";

const SERVER_URL = 'http://3.231.166.128:8080/api-airbnb/';
//Verfica que ya no esta haciendo acciones 
const instance = axios.create({
    baseURL: SERVER_URL,
    timeout: 3000
})

export default instance;