import { FastifyInstance } from "fastify";
import { ping } from "./routes/ping";
import { redirect } from "./routes/redirect";
import { postList } from "./routes/post-list";
import { post } from "./routes/post";
import { badge } from "./routes/badge";

export const router = async (fastify: FastifyInstance) => {
  fastify.register(ping);
  fastify.register(redirect);
  fastify.register(postList);
  fastify.register(post);
  fastify.register(badge);
};
