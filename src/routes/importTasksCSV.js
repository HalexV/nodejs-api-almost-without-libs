import busboy from "busboy";
import { Writable } from "node:stream";
import Task from "../entities/Task.js";
import database from "../database/database.js";

async function saveStreamCSVToDb(chunk, encoding, cb) {
  const [, ...lines] = chunk.toString().split("\n");
  for (const line of lines) {
    const [title, description] = line.split(",");
    const task = new Task({ title, description });
    await database.insert("tasks", task);
  }

  cb();
}

const writable = Writable({
  write(chunk, encoding, cb) {
    saveStreamCSVToDb(chunk, encoding, cb);
  },
});

export default async function importTasksCSV(req, res) {
  const bb = busboy({ headers: req.headers });

  bb.on("file", (name, file, info) => {
    if (name !== "csv") {
      file.resume();
      return;
    }
    file.pipe(writable);
  });
  bb.on("close", () => {
    return res.end(
      JSON.stringify({
        message: "Tasks imported",
      })
    );
  });

  req.pipe(bb);
}
