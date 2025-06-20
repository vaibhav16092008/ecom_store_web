import axios, { AxiosError, AxiosResponse } from "axios";
import { getToken } from "./connection";
const token = getToken();
const apiInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000,
  ...(token && {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  }),
});

export const getRequest = async <T = any>(url: string) => {
  try {
    const response: AxiosResponse<T> = await apiInstance.get(url);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(axiosError.message);
  }
};

export const postRequest = async <T = any>(
  url: string,
  payload: any
): Promise<T | undefined> => {
  try {
    const response: AxiosResponse<T> = await apiInstance.post(url, payload);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(axiosError.message);
  }
};
