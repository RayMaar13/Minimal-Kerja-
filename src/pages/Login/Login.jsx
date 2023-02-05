import React, { useContext, } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { StateContext } from "../../context/GlobalContext";

const Login = () => {
  const {state, handler} = useContext(StateContext)
  const { setIsLogin, loginInput, setLoginInput} = state
  const {loginHandlerChange} = handler
  const navigate = useNavigate()

  //Login handler
  const handleLogin = (event) => {
    event.preventDefault();

    let { email, password } = loginInput;

    axios
      .post(`https://dev-example.sanbercloud.com/api/login `, {
        email,
        password,
      })
      .then((res) => {
        let { token, user } = res.data;
        Cookies.set("token", token, {expires: 1});
        Cookies.set("user.name", user.name, {expires: 1})
        Cookies.set("user.image_url", user.image_url, {expires: 1})
        Cookies.set("user.email", user.email, {expires: 1})
        navigate("/job-vacancy")
      });

  setLoginInput({
    email: "",  
    password: ""
  })
  setIsLogin(true)
  };


  return (
    <div className="container my-32 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-center text-gray-700 ">
          Minimal Kerja
        </h2>
        <h3 className="mt-1 text-xl font-medium text-center text-gray-600 ">
          Welcome Back
        </h3>
        <p className="mt-1 text-center text-gray-500">
          Login or create account
        </p>
        <form onSubmit={handleLogin}>
          <div className="w-full mt-4">
            <input
              defaultValue={loginInput.email}
              onChange={loginHandlerChange}
              name="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />
          </div>
          <div className="w-full mt-4">
            <input
              defaultValue={loginInput.password}
              onChange={loginHandlerChange}
              minLength={8}
              name="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
        <span className="text-sm text-gray-600">
          Don't have an account?{" "}
        </span>
        <Link
          to={'/register'}
          className="mx-2 text-sm font-bold text-blue-500 hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
