import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import {
  useDeleteTodoMutation,
  useGetTodosByEmailQuery,
} from "../redux/api/todosApi";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/slices/authSlice";
import Todo from "../types/interfaces.ts";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

const TodoList = () => {
  const { email } = useSelector(selectAuth);
  const { data, error, isLoading } = useGetTodosByEmailQuery(email);
  const [deleteTodo, { data: removeData, error: errorData }] =
    useDeleteTodoMutation();

  const [todos, setTodos] = useState(data);

  const handleOnDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const items = [...todos];

    const [reorderItem] = items.splice(source.index, 1);
    items.splice(destination?.index, 0, reorderItem);

    const orderArray = items.map((todo) => todo.id);
    localStorage.setItem("todosOrder", JSON.stringify(orderArray));

    setTodos(items);
  };

  // const handleDelete = (id: string) => {
  //   const arrayIdsOrder = JSON.parse(localStorage.getItem("todosOrder") || "");

  //   if (arrayIdsOrder?.length) {
  //     const newOrderArray = arrayIdsOrder.filter((todoId: string) => {
  //       return todoId !== id;
  //     });

  //     localStorage.setItem("todosOrder", JSON.stringify(newOrderArray));
  //   }

  //   deleteTodo(id);
  // };

  useEffect(() => {
    const todosArrayOrder = localStorage.getItem("todosOrder")
      ? JSON.parse(localStorage.getItem("todosOrder") || "")
      : [];

    if (!todosArrayOrder && data?.length) {
      const newArray = data.map((todo: Todo) => todo.id);
      localStorage.setItem("todosOrder", JSON.stringify(newArray));
    }

    let myArray;
    if (todosArrayOrder?.length && data?.length) {
      myArray = todosArrayOrder.map((pos: string) => {
        return data.find((item: Todo) => item.id === pos);
      });

      const newItems = data.filter((item: Todo) => {
        return !todosArrayOrder.includes(item.id);
      });

      if (newItems.length) myArray = [...newItems, ...myArray];
    }

    setTodos(myArray || data);
  }, [data]);

  return (
    <section>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress size={"2rem"} />
        </div>
      ) : data?.length == 0 || !data ? (
        <p>You dont have todos yet</p>
      ) : (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="todos">
            {(provided) => (
              <ul
                className="flex flex-col  "
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todos?.map((todo: Todo, index: number) => (
                  <Draggable
                    key={todo?.id}
                    draggableId={todo?.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <article
                        className=" rounded-md bg-white border border-slate-400 "
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <TodoItem key={todo.id} todo={todo} />
                      </article>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </section>
  );
};
export default TodoList;
