import { frontApi } from "../config/frontApi";

export default async function getAccessToken(IDToken: string) {
  const res = await frontApi<{ AccessToken: string }>({
    url: "/GetAccessToken",
    method: "POST",
    params: { IDToken },
  });

  return res;
}
