import Fastify from "fastify";
import { router } from "./router";
import fastifyView from "@fastify/view";
import ejs from "ejs";
import path from "path";
import { cwd } from "process";

const app = Fastify({
  logger: false,
});

app.register(router, {
  prefix: "/api",
});

app.register(fastifyView, {
  engine: {
    ejs,
  },
  templates: path.resolve(cwd(), "templates"),
});

export default app;
