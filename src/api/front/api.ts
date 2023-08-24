import { AxiosError } from "axios";
import { APIParams } from "./type";

export async function api<ApiResponse>({
  url,
  axiosInstance,
  method = "GET",
  params,
}: APIParams) {
  let response: ApiResponse;

  try {
    if (method === "GET") {
      response = await axiosInstance({
        url,
        method,
      });
    } else {
      response = await axiosInstance({
        url,
        method,
        data: params,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
    return response;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw e;
    }
  }
}
