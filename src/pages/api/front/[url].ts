import { frontApi } from "@/api/front/config/frontApi";
import { Method } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function frontHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url, body, method } = req;
  const apiUrl = (url as string).replace("/api/front", "");

  try {
    const apiResponse = await frontApi({
      url: apiUrl,
      method: method as Method,
      params: body,
    });

    res.status(200).json(apiResponse);
  } catch (e) {
    throw e;
  }
}
