import database from "../database/database.js";

export default async function listTasks(req, res) {
  const optionals = ["title", "description"];

  const filters = {};

  optionals.forEach((option) => {
    if (Reflect.has(req.query, option)) {
      if (req.query[option]) {
        filters[option] = req.query[option];
      }
    }
  });

  const tasks = await database.select({ table: "tasks", filters });

  return res.end(JSON.stringify(tasks));
}
