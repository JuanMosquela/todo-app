import { FiEdit } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { useGetTodosByEmailQuery } from "../redux/api/todoApi";
import { CircularProgress } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data, error, isLoading } = useGetTodosByEmailQuery(
    "jmosquella11@gmail.com"
  );

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress size={"2rem"} />
        </div>
      ) : (
        <ul className="flex flex-col gap-1">
          {data?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default TodoList;
