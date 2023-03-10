import { IoIosOptions } from "react-icons/io";
import { BiSortAlt2 } from "react-icons/bi";
import TodoList from "../components/TodoList";
import PopUp from "../components/PopUp";
import TodoModal from "../components/TodoModal";

const Home = () => {
  return (
    <div className=" bg-slate-200  flex justify-center min-h-screen py-10 px-2  ">
      <div className=" md:px-10 px-4 md:py-10  py-6  min-h-fit   bg-white rounded-xl  md:w-3/6 sm:w-5/6 w-6/6 ">
        <nav className="flex justify-between items-center mb-6 ">
          <h1 className=" font-bold uppercase text-3xl text-blue">Todo App</h1>
          <div className="flex gap-4">
            <PopUp />
            <button className="flex justify-center items-center text-xl w-10 h-10">
              <IoIosOptions />
            </button>
          </div>
        </nav>
        <div className="flex justify-between mb-6">
          <button className="flex items-center gap-2 px-2">
            Sorted by <BiSortAlt2 />{" "}
          </button>
          <TodoModal />
        </div>

        <TodoList />
      </div>
    </div>
  );
};

export default Home;
