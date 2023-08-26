import axios from "axios";
import { api } from "./api";
import { APIParams } from "./type";

const frontApiConfig = axios.create({
  baseURL: "https://w3bxgxwsqk.execute-api.ap-northeast-2.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function frontApi<ApiResponse>(
  params: Omit<APIParams, "axiosInstance">
) {
  return (await api<ApiResponse>({
    ...params,
    axiosInstance: frontApiConfig,
  })) as ApiResponse;
}

frontApiConfig.interceptors.response.use((res) => {
  return res.data;
});
