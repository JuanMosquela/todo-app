import { CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { selectAuth, setCredentials } from "../redux/slices/authSlice";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { toast } from "react-toastify";
import { loginSchemas } from "../schemas/login.shcemas";
import { useSignInMutation } from "../redux/api/authApi";
import "../input.css";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();

  const [signIn, { data, isLoading, error, isSuccess }] = useSignInMutation();

  console.log(error);

  const onSubmit = async () => {
    try {
      await signIn(values);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data?.token) {
      dispatch(setCredentials(data));
      toast.success("Logeado correctamente");
    }
    // if (error?.status === 401) {
    //   toast.error(error.data.msg);
    // }
    // if (error?.status === 400) {
    //   toast.error("Este usuario no existe");
    // }

    // if (auth?.token) navigate(from);
  }, [isSuccess]);

  useEffect(() => {
    console.log(auth);
    if (auth?.token) navigate(from);
  }, [auth]);

  console.log(data);

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchemas,
      onSubmit,
    });

  return (
    <div className="  flex justify-center items-center min-h-[100vh]  ">
      <div className="bg-white  rounded-lg overflow-hidden relative    shadow-md w-[600px] ">
        <form
          className="px-20  py-10  w-full "
          method="post"
          onSubmit={handleSubmit}
        >
          <h1 className=" text-2xl font-bold text-blue  mb-10 uppercase">
            account login login
          </h1>

          <div className="relative mb-4 min-h-[100px] ">
            <h4 className="text-sm font-semibold uppercase mb-2">email</h4>
            <input
              className="w-full text-md outline-none  bg-slate-200  p-2  "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="text"
              name="email"
              placeholder="Email Adress"
            />
            {errors.email && touched.email && (
              <p className="pt-2 text-red text-sm font-semibold">
                {errors.email}
              </p>
            )}
          </div>
          <div className="relative mb-4 min-h-[100px] ">
            <h4 className="text-sm font-semibold uppercase mb-2">password</h4>
            <input
              className="w-full text-md outline-none  bg-slate-200  p-2 "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type={visible ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            {visible ? (
              <AiFillEyeInvisible
                className="absolute right-[15px] top-[35%] text-2xl"
                onClick={() => setVisible(!visible)}
              />
            ) : (
              <AiFillEye
                className="absolute right-[15px] top-[35%] text-2xl"
                onClick={() => setVisible(!visible)}
              />
            )}
            {errors.password && touched.password && (
              <p className="pt-2 text-red text-sm font-semibold">
                {errors.password}
              </p>
            )}
          </div>
          <div className=" py-4  flex w-full justify-end ">
            <p className="flex gap-2  text-slate text-md font-thin pb-2">
              Need an Account?
              <br />
              <Link className="text-orange font-semibold" to="/register">
                Sign Up
              </Link>
            </p>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bloc flex items-center justify-center w-full h-12 bg-blue hover:bg-blue/90 duration-150 text-white rounded-md py-2 font-bold  "
          >
            {isLoading ? (
              <>
                <CircularProgress
                  sx={{ color: "rgba(255,255,255,.8)" }}
                  size="1.5rem"
                />
              </>
            ) : (
              <span className="flex justify-center items-center rounded-md text-sm uppercase w-full h-[40px]  ">
                Login
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
