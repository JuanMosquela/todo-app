import { CircularProgress } from "@mui/material";
import TodoItem from "./TodoItem";
import { useGetTodosByEmailQuery } from "../redux/api/todosApi";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/slices/authSlice";

const TodoList = () => {
  const { email } = useSelector(selectAuth);
  const { data, error, isLoading } = useGetTodosByEmailQuery(email);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress size={"2rem"} />
        </div>
      ) : data?.length == 0 || !data ? (
        <p>You dont have todos yet</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {data?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default TodoList;
