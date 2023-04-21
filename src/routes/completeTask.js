import database from "../database/database.js";

export default async function completeTask(req, res) {
  const { id } = req.params;

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

  task.completed_at = !task.completed_at ? new Date() : null;

  task.updated_at = new Date();

  await database.update("tasks", task, id);

  return res.writeHead(204).end();
}
