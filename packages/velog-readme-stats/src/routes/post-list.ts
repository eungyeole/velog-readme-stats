import { FastifyInstance, FastifyRequest } from "fastify";
import { velogClient } from "velog-client";

export const postList = async (fastify: FastifyInstance) => {
  fastify.get(
    "/list",
    async (
      req: FastifyRequest<{
        Querystring: { name: string };
      }>,
      res
    ) => {
      const { name } = req.query;

      try {
        const { posts } = await velogClient.getPosts({
          username: name,
          limit: 5,
        });

        const data = {
          username: name,
          posts: posts.map((post) => ({
            user: { username: name },
            url_slug: post.url_slug,
            title: post.title,
          })),
        };

        return res.type("image/svg+xml").view("post-list.ejs", data);
      } catch (e) {
        return res.send(e);
      }
    }
  );
};
