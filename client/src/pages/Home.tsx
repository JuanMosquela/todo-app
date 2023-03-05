import { AiOutlineUser } from "react-icons/ai";
import { SlOptions } from "react-icons/Sl";
import { BiSortAlt2 } from "react-icons/bi";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div className=" bg-slate-200 min-h-screen py-6">
      <div className=" container bg-white rounded-xl py-6">
        <nav className="flex justify-between items-center mb-6 ">
          <h1 className=" font-semibold capitalize text-4xl">Works</h1>
          <div className="flex gap-4">
            <button className="flex justify-center items-center text-xl w-10 h-10">
              {" "}
              <AiOutlineUser />{" "}
            </button>
            <button className="flex justify-center items-center text-xl w-10 h-10">
              <SlOptions />
            </button>
          </div>
        </nav>
        <div className="flex justify-between mb-6">
          <button className="flex items-center gap-2 px-2">
            Sorted by <BiSortAlt2 />{" "}
          </button>
          <button className="text-2xl w-10 h-10">x</button>
        </div>

        <TodoList />
      </div>
    </div>
  );
};

export default Home;
