import axios from "axios";

const BASE_URL = "http://localhost:8080/api/products";

export const getProducts = (page, size) =>
  axios.get(`${BASE_URL}/paginated?page=${page}&size=${size}`);

export const searchProducts = (keyword) =>
  axios.get(`${BASE_URL}/search?keyword=${keyword}`);

export const addProduct = (data) =>
  axios.post(BASE_URL, data);

export const updateProduct = (id, data) =>
  axios.put(`${BASE_URL}/${id}`, data);

export const deleteProduct = (id) =>
  axios.delete(`${BASE_URL}/${id}`);