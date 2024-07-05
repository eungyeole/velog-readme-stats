import Fastify from "fastify";
import { router } from "./router";
import fastifyView from "@fastify/view";
import ejs from "ejs";
import path from "path";

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
  templates: "templates",
});

console.log(path.resolve(__dirname, "templates"));
export default app;
