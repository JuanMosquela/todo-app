import { useState } from "react";
import { AiFillDelete, AiOutlineCalendar } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../redux/api/todosApi";
import Todo from "../types/interfaces.ts";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const [completed, setCompleted] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [editTodo, setEditTodo] = useState(todo.title);

  const [updateTodo, { data, error }] = useUpdateTodoMutation();

  const [deleteTodo, { data: removeData, error: errorData }] =
    useDeleteTodoMutation();

  const handleClick = () => setCompleted((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(editTodo);
    updateTodo({
      id: todo.id,
      title: editTodo,
      date: Date(),
    });
    setEditMode(false);
  };

  console.log(data, error);

  return (
    <li className=" items-center bg-slate-200 p-4 gap-6">
      <div className="flex items-center md:gap-6 gap-4 ">
        <input
          onClick={handleClick}
          className="inline-block w-4 h-4 scale-100 "
          type="checkbox"
          name=""
          id=""
        />

        <div className=" md:ml-2 flex-1 w-full">
          {!editMode && (
            <h4
              className={` ${completed && "line-through"} md:text-lg text-md `}
            >
              {todo.title}
            </h4>
          )}
          {editMode && (
            <form className="block " onSubmit={handleSubmit}>
              <input
                className="w-full overflow-auto text-lg  bg-slate-200"
                type="text"
                value={editTodo}
                autoFocus={editTodo ? true : false}
                onChange={handleChange}
              />
            </form>
          )}
        </div>
        <div className="  flex gap-2 items-center">
          <button
            className=" md:text-xl text-md "
            onClick={() => setEditMode(true)}
          >
            <BiPencil />
          </button>
          <button
            className="md:text-xl text-md "
            onClick={() => deleteTodo(todo.id)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </li>
  );
};
export default TodoItem;
