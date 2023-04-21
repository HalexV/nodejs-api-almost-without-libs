import database from "../database/database.js";

export default async function deleteTask(req, res) {
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

  await database.delete("tasks", id);

  return res.writeHead(204).end();
}
