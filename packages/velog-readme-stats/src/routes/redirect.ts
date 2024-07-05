import { FastifyInstance, FastifyRequest } from "fastify";
import { velogClient } from "velog-client";
import { NotFoundError } from "../errors/ApiError";

export const redirect = async (fastify: FastifyInstance) => {
  fastify.get(
    "/redirect",
    async (
      req: FastifyRequest<{
        Querystring: { name: string; tag: string };
      }>,
      res
    ) => {
      const { name, tag } = req.query;

      try {
        const { posts } = await velogClient.getPosts({
          username: name,
          tag,
          limit: 1,
        });

        const [post] = posts;

        if (!post.url_slug) {
          throw new NotFoundError("Post not found");
        }

        const url = new URL(`https://velog.io/@${name}/${post.url_slug}`);

        res.redirect(url.toString(), 301);
      } catch (e) {
        return res.send(e);
      }
    }
  );
};
