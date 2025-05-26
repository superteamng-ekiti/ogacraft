/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAccessToken } from "@privy-io/react-auth";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:41817/api/";

class AxiosService {
  private static instance: AxiosService;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  public readonly axiosInstance;

  public static getInstance(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService();
    }
    return AxiosService.instance;
  }

  private setupInterceptors() {
    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      async (config) => {
        // Add auth token if it exists
        const accessToken = await getAccessToken();
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error: any) => {
        // Only retry once for CSRF errors
        const config = error.config as any; // Need to add retryCount to config

        // Handle 401 (Unauthorized) errors
        if (error.response?.status === 401 && !config._retry401) {
          config._retry401 = true;

          console.log(error);
          return Promise.reject(error);
        }

        return Promise.reject(error);
      }
    );
  }
}

const axiosService = AxiosService.getInstance();
export const axiosInstance = axiosService.axiosInstance;

// API request functions
export const api = {
  get: <T>(url: string) =>
    axiosInstance.get<T>(url).then((response) => response.data),

  post: <T>(url: string, data: any) =>
    axiosInstance.post<T>(url, data).then((response) => response.data),

  put: <T>(url: string, data: any) =>
    axiosInstance.put<T>(url, data).then((response) => response.data),

  patch: <T>(url: string, data: any) =>
    axiosInstance.patch<T>(url, data).then((response) => response.data),

  delete: <T>(url: string) =>
    axiosInstance.delete<T>(url).then((response) => response.data),
};