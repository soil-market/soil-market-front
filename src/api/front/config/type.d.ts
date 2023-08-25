import { AxiosInstance, Method } from "axios";

export type APIParams = {
  url: string;
  axiosInstance: AxiosInstance;
  method: Method | undefined;
  params?: any;
};
