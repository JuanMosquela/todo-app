import router from ".";
import {
  createNewTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todos.controller";

router.get("/", getAllTodos);

router.post("/", createNewTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
