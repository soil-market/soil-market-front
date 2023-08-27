import { apiRoute } from "../config/apiRoute";

export default async function getAccessToken(IDToken: string) {
  const res = await fetch(`/api/front/${apiRoute.getAccessToken}`, {
    method: "POST",
    body: JSON.stringify({ IDToken }),
  });

  return res as unknown as {
    AccessToken: string;
  };
}
