import { AiOutlineCalendar } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Todo from "../types/interfaces.ts";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  return (
    <li className="flex justify-between items-center bg-slate-200 px-4 py-2">
      <div className="flex gap-6 ">
        <input className="" type="checkbox" name="" id="" />
        <div className="ml-2">
          <h4 className="text-lg ">{todo.title}</h4>
          <span className="flex gap-2 items-center text-blue-500  ">
            <AiOutlineCalendar />
            {todo.date}
          </span>
        </div>
      </div>
      <button className="text-md">
        <FiEdit />
      </button>
    </li>
  );
};
export default TodoItem;
