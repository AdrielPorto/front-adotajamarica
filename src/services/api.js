import axios from "axios";

export const api = axios.create({
  baseURL: "https://adotajamarica-94dd2d31c529.herokuapp.com",
});

export const apiCep = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
