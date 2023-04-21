import database from "../database/database.js";
import Task from "../entities/Task.js";
import extractProperties from "../utils/extractProperties.js";

export default async function createTask(req, res) {
  const properties = extractProperties(["title", "description"], req.body);

  if (!properties || Object.keys(properties).length !== 2)
    return res.writeHead(400).end(
      JSON.stringify({
        message: "Enter title and description",
      })
    );

  const { title, description } = properties;

  const task = new Task({ title, description });

  const result = await database.insert("tasks", task);

  return res.end(JSON.stringify(result));
}
