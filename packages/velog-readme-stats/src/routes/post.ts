import { FastifyInstance, FastifyRequest } from "fastify";
import { velogClient } from "velog-client";
import { getTextWidth } from "../utils/get-text-width";
import { NotFoundError } from "../errors/ApiError";
import { getRecentlyPost } from "../utils/get-recently-post";

export const post = async (fastify: FastifyInstance) => {
  fastify.get(
    "/",
    async (
      req: FastifyRequest<{
        Querystring: { name: string; tag?: string; slug?: string };
      }>,
      res
    ) => {
      const { name, slug, tag } = req.query;

      if (!name) {
        throw new NotFoundError("name is required");
      }

      try {
        const post = await getRecentlyPost(name, { tag, slug });

        return res.type("image/svg+xml").view("post.ejs", {
          ...post,
          getTextWidth,
        });
      } catch (e) {
        return res.send(e);
      }
    }
  );
};
