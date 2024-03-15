import axios from "axios";

export const apiService = axios.create({baseURL:'https://jsonplaceholder.typicode.com/'})