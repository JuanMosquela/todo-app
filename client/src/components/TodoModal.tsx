import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { selectAuth } from "../redux/slices/authSlice";
import { useSelector } from "react-redux";
import { useCreateTodoMutation } from "../redux/api/todosApi";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const TodoModal = () => {
  const auth = useSelector(selectAuth);

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const [createTodo, { data, isLoading, error }] = useCreateTodoMutation();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#FFF",
    borderRadius: "12px",
    p: 4,
  };

  const handleOpen = () => {
    if (!auth?.token) {
      toast.error("Debes estar autenticado");
      navigate("/login");
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      createTodo({
        email: auth.email,
        title,
        progress: 10,
        date: new Date(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      setOpen(false);
    }

    //   if (reviewData && !isLoading) {
    //     toast.success("Product reviewed");
    //   }

    //   if (error?.status === 501) {
    //     toast.error(`${error?.data?.msg}`);
    //   }
  }, [error, data]);

  return (
    <div className="">
      <button
        onClick={handleOpen}
        className="flex justify-center items-center  bg-blue text-2xl text-white font-bold w-10 h-10"
      >
        <FiEdit />
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} className="w-[85%]  md:w-[700px]">
          <form onSubmit={handleSubmit}>
            <h3 className=" text-blue text-2xl font-semibold mb-4">
              Write something to do later
            </h3>
            <p className="text-sm  font-semibold text-slate-400">
              Write something to do later
            </p>
            <textarea
              className="bg-gray p-2 text-sm w-full outline-none mt-2 resize-none rounded-md  "
              name="textarea"
              rows={7}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className=" bg-blue hover:bg-blue/90 text-white font-medium  text-md w-[100px] h-[40px] drop-shadow-lg"
              >
                {isLoading ? (
                  <>
                    <CircularProgress
                      size="1.5rem"
                      sx={{ color: "rgba(255,255,255)" }}
                    />
                  </>
                ) : (
                  "Enviar"
                )}
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default TodoModal;
