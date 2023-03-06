import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./input.css";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

    <App />
  </Provider>
);
