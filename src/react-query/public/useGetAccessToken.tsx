import { apiRoute } from "@/api/front/config/apiRoute";
import getAccessToken from "@/api/front/public/getAccessToken";
import { UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useMutaion from "../config/useMutaion";

export default function useGetAccessToken(
  options: Omit<
    UseMutationOptions<
      { AccessToken: string },
      AxiosError<unknown, any>,
      string,
      unknown
    >,
    "mutationKey" | "mutationFn"
  >
) {
  return useMutaion([apiRoute.getAccessToken], getAccessToken, options);
}
