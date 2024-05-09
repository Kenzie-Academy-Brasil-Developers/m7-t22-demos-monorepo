import axios from "axios";

export const api = axios.create({
  baseURL: "https://scrap-fake-api.onrender.com",
});
