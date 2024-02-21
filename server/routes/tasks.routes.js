import { Router } from "express";
import {
  createTask,
  deleteTasks,
  getTask,
  getTasks,
  updateTasks,
} from "../controllers/taks.controllers.js";

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTasks);

router.delete("/tasks/:id", deleteTasks);

export default router;
