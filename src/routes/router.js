import buildRegexPath from "../utils/buildRegexPath.js";
import completeTask from "./completeTask.js";
import createTask from "./createTask.js";
import deleteTask from "./deleteTask.js";
import editTask from "./editTask.js";
import importTasksCSV from "./importTasksCSV.js";
import listTasks from "./listTasks.js";

const router = new Map();

router.set(buildRegexPath("POST/tasks"), createTask);
router.set(buildRegexPath("POST/tasks/import/csv"), importTasksCSV);
router.set(buildRegexPath("GET/tasks"), listTasks);
router.set(buildRegexPath("PUT/tasks/:id"), editTask);
router.set(buildRegexPath("DELETE/tasks/:id"), deleteTask);
router.set(buildRegexPath("PATCH/tasks/:id/complete"), completeTask);

export default router;
