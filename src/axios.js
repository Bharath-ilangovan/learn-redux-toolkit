import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com";

export const instanceRoot = axios.create({
  baseURL: URL,
});

export const instancePost = axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
