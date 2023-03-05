import { useSelector } from "react-redux";
import { selectAuth } from "../redux/slices/authSlice";
import { useLocation, Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();
  const { token } = useSelector(selectAuth);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
