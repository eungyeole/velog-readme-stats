import app from "../src/app";

import { VercelRequest, VercelResponse } from "@vercel/node";

const serverless = async (req: VercelRequest, res: VercelResponse) => {
  await app.ready();

  return app.server.emit("request", req, res);
};

export default serverless;
