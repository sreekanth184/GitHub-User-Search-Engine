import axios from "axios";

const Github_instance = axios.create({
    baseURL: 'https://api.github.com',
  });

  const token = import.meta.env.VITE_Github_token

  Github_instance.interceptors.request.use(function (config) {
    
    config.headers.Authorization = `Bearer ${token}`
    return config;

  }, function (error) {
   
    return Promise.reject(error);
  });




  export default Github_instance