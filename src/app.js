import http from "node:http";
import parseJson from "./middlewares/parseJson.js";
import Task from "./entities/Task.js";
import database from "./database/database.js";

const app = http.createServer(async (req, res) => {
  const { method, url } = req;

  await parseJson(req, res);

  if (method === "GET" && url === "/tasks") {
    const tasks = await database.select({ table: "tasks" });

    return res.end(JSON.stringify(tasks));
  }

  if (method === "POST" && url === "/tasks") {
    const { title, description } = req.body;

    const task = new Task({ title, description });

    const result = await database.insert("tasks", task);

    return res.end(JSON.stringify(result));
  }

  return res.end();
});

export default app;
