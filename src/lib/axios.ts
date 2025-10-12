import { env } from "@/config/env";
import axios from "axios";

export const apiBaseInstance = axios.create({
  baseURL: `${env.API_BASE_URL}/api`,
});

apiBaseInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  },
);
