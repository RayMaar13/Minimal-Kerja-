import React, { useContext, useState, } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { StateContext } from "../../context/GlobalContext";

const ChangePassword = () => {
  const {state} = useContext(StateContext)
  const { setIsLogin} = state
  const [changePassword, setChangePassword] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: ""
  })
  const navigate = useNavigate()


  //ChangePasswordHandler
  const changePasswordHandler = (event) => {
    const value = event.target.value
    const name =event.target.name
    setChangePassword({
      ...changePassword,
      [name]: value,
    });
  }


  //Change Password Submit
  const changePasswordSubmit = (event) => {
    event.preventDefault();

    const {current_password,
    new_password,
    new_confirm_password} = changePassword

    axios
      .post(`https://dev-example.sanbercloud.com/api/change-password`,{
        current_password,
        new_password,
        new_confirm_password
      },
      {headers: {"Authorization" : "Bearer " + Cookies.get('token')}})
      
      .then((res) => {
        Cookies.remove("token");
        Cookies.remove("user.name");
        Cookies.remove("user.image_url");
        Cookies.remove("user.email");
        navigate("/login")
      })
      .catch((err) => {
        console.log(err);
      })

      setChangePassword({
        current_password: "",
        new_password: "",
        new_confirm_password: ""
      })
  setIsLogin(false)
  };


  return (
    <div className="container my-32 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-center text-gray-700 ">
          Minimal Kerja
        </h2>
        <p className="mt-1 text-center text-gray-500">
          Change Password
        </p>
        <form onSubmit={changePasswordSubmit}>
          <div className="w-full mt-4">
            <input
              defaultValue={changePassword.current_password}
              onChange={changePasswordHandler}
              name="current_password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Current Password"
              aria-label="Current Password"
            />
          </div>
          <div className="w-full mt-4">
            <input
              defaultValue={changePassword.new_password}
              onChange={changePasswordHandler}
              minLength={8}
              name="new_password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="New Password"
              aria-label="New Password"
            />
          </div>
          <div className="w-full mt-4">
            <input
              defaultValue={changePassword.new_confirm_password}
              onChange={changePasswordHandler}
              minLength={8}
              name="new_confirm_password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Confirm New Password"
              aria-label="Confirm New Password"
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Change!
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

export default ChangePassword;
