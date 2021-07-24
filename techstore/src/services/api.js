import axios from "axios";

const api = axios.create({
  baseURL: 'https://valeapp.com.br/gama/api',
});

export default api;