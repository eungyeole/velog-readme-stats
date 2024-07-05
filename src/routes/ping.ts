import { FastifyInstance } from "fastify";

export const ping = async (fastify: FastifyInstance) => {
  fastify.get("/ping", async (_, res) => {
    res.send("pong");
  });
};
