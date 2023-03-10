import { Box, CircularProgress, Modal } from "@mui/material";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDeleteTodoMutation } from "../redux/api/todosApi";

const ConfirmationModal = ({ id }: any) => {
  const [open, setOpen] = useState(false);

  const [deleteTodo, { isLoading }] = useDeleteTodoMutation();

  const handleOpen = () => {
    // if (!auth?.token) {
    //   toast.error("Debes estar autenticado");
    //   navigate("/login");
    //   return;
    // }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id: string) => {
    const arrayIdsOrder = JSON.parse(localStorage.getItem("todosOrder") || "");

    if (arrayIdsOrder?.length) {
      const newOrderArray = arrayIdsOrder.filter((todoId: string) => {
        return todoId !== id;
      });

      localStorage.setItem("todosOrder", JSON.stringify(newOrderArray));
    }

    deleteTodo(id);
  };

  return (
    <>
      <button
        className="md:text-xl text-md h-10 w-10 flex justify-center items-center "
        onClick={handleOpen}
      >
        <AiFillDelete />
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: { md: "500px", sm: "70%", xs: "90%" },
            transform: "translate(-50%, -50%)",
            bgcolor: "#FFF",
            borderRadius: "10px",
            p: 4,
          }}
        >
          <h3 className=" text-blue text-2xl font-semibold mb-4">
            Are you sure ?
          </h3>
          <p className="text-slate-600 mb-6">
            This operation will remove your todo permanently
          </p>

          <div className="flex items-center justify-center gap-2">
            <button
              className="bg-slate-200 h-[40px] w-full"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className=" bg-blue hover:bg-blue/90 text-white font-medium  text-md w-full  h-[40px] drop-shadow-lg "
              onClick={() => handleDelete(id)}
            >
              {isLoading ? (
                <>
                  <CircularProgress
                    size="1.2rem"
                    sx={{ color: "rgba(255,255,255)" }}
                  />
                </>
              ) : (
                "Confirm"
              )}
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default ConfirmationModal;
