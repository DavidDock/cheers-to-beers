import axios from "axios";

axios.defaults.baseURL = "https://cheers-to-beers-api-5a858b4697bd.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();