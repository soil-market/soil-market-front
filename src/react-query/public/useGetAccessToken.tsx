import { apiRoute } from "@/api/front/config/apiRoute";
import getAccessToken from "@/api/front/public/getAccessToken";
import useMutaion from "../config/useMutaion";

export default function useGetAccessToken(IDToken: string) {
  return useMutaion([apiRoute.getAccessToken], () => getAccessToken(IDToken));
}
