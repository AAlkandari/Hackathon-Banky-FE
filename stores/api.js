import axios from "axios";
export const baseURL = "http://192.168.150.79:8000";

const api = axios.create({ baseURL: `${baseURL}` });

export default api;
