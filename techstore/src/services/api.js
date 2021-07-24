import axios from "axios";

const api = axios.create({
  baseURL: 'http://valeapp.com.br/gama/api',
});

export default api;