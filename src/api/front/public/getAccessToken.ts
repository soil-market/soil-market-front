import { apiRoute } from "../config/apiRoute";
import { frontApi } from "../config/frontApi";

export default async function getAccessToken(IDToken: string) {
  const res = await frontApi<{ AccessToken: string }>({
    url: apiRoute.getAccessToken,
    method: "POST",
    params: { IDToken },
  });

  return res;
}
