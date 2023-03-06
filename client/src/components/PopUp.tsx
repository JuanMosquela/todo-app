import * as React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { Link } from "react-router-dom";

export default function PopUp() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  return (
    <div className="bg-slate-200  flex justify-center items-center h-10 w-10 text-slate-700">
      <button onClick={handleClick}>
        <AiOutlineUser />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/login">
          <MenuItem onClick={handleClose}>Login</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>Register</MenuItem>
        <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
