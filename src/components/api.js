import axios from "axios";
const api = axios.create({ baseURL: process.env.BASE_API_URL, withCredentials: true });
const errHandling = (error) => Promise.reject(error);
const reqHandling = (config) => {
  const obj = { ...config };
  const token = localStorage.getItem("token");
  if (token) obj.headers["authorization"] = `Bearer ${token}`;
  return obj;
};
const resHandling = (response) => response;
api.interceptors.request.use(reqHandling, errHandling);
api.interceptors.response.use(resHandling, errHandling);
export { api };