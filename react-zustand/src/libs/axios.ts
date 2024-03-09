import axios from "axios";
import { useAuthStore } from '../store/auth'; 

const authApi = axios.create({
  baseURL: "http://localhost:4321/api/auth/",
  withCredentials: true
});

authApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers = Object.assign({}, config.headers, {
      Authorization: `Bearer ${token}`
    });

  }

  return config;
});

export default authApi;
