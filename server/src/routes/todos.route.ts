import router from ".";
import { createNewTodo, getAllTodos } from "../controllers/todos.controller";

router.get("/", getAllTodos);

router.post("/", createNewTodo);

export default router;
