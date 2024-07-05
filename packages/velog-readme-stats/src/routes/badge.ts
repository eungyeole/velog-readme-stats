import { FastifyInstance, FastifyRequest } from "fastify";
import { NotFoundError } from "../errors/ApiError";
import { getTextWidth } from "../utils/get-text-width";

export const badge = async (fastify: FastifyInstance) => {
  fastify.get(
    "/badge",
    async (
      req: FastifyRequest<{
        Querystring: { name: string };
      }>,
      res
    ) => {
      const { name } = req.query;

      if (!name) {
        throw new NotFoundError("name is required");
      }

      return res.type("image/svg+xml").view("badge.ejs", {
        name,
        getTextWidth,
      });
    }
  );
};
