import axios from 'axios';

const API = axios.create({
  baseURL: ' https://memedoc.herokuapp.com/v1/',
});

export default API;
