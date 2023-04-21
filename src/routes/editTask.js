import database from "../database/database.js";
import extractProperties from "../utils/extractProperties.js";

export default async function editTask(req, res) {
  const { id } = req.params;

  const properties = extractProperties(["title", "description"], req.body);

  if (!properties)
    return res.writeHead(400).end(
      JSON.stringify({
        message: "No title or description to edit",
      })
    );

  const [task] = await database.select({
    table: "tasks",
    filters: {
      id,
    },
    exact: true,
  });

  if (!task)
    return res.writeHead(404).end(
      JSON.stringify({
        message: "Task not found.",
      })
    );

  for (const [key, value] of Object.entries(properties)) {
    task[key] = value;
  }

  task.updated_at = new Date();

  await database.update("tasks", task, id);

  return res.writeHead(204).end();
}
