import axios from "axios";
import { getToken } from "./tokenHelper";

export const API_BASE_URL = "https://vertex.achchuthan.lk/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await apiClient.get(`/posts?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
