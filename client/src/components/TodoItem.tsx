import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Todo from "../types/interfaces.ts";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const [completed, setCompleted] = useState(false);

  const handleClick = () => setCompleted((prev) => !prev);
  console.log(completed);
  return (
    <li className="flex justify-between items-center bg-slate-200 p-4 gap-6">
      <div className="flex items-center gap-6 ">
        <input
          onClick={handleClick}
          className="w-4 h-4 scale-100 bg-slate-700"
          type="checkbox"
          name=""
          id=""
        />
        <div className="ml-2">
          <h4 className={` ${completed && "line-through"} text-lg `}>
            {todo.title.slice(0, 60)}
          </h4>
          {/* <span className="flex gap-2 items-center text-blue-500  ">
            <AiOutlineCalendar />
            {todo.date}
          </span> */}
        </div>
      </div>
      <button className="text-xl ">
        <FiEdit />
      </button>
    </li>
  );
};
export default TodoItem;
