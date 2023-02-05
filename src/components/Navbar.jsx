import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StateContext } from "../context/GlobalContext";
import "./Navbar.css";
import Cookies from "js-cookie";

const Navbar = () => {
  const { state } = useContext(StateContext);
  const { isLogin } = state;
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const clickHandler = () => {
    setIsOpen(!isOpen);
    if (isLogin === false) {
      setIsProfileClicked(!isProfileClicked);
    }
  };

  const logoutHandler = () => {
    Cookies.remove("token");
    Cookies.remove("user.name");
    Cookies.remove("user.image_url");
    Cookies.remove("user.email");
    setIsProfileClicked(!isProfileClicked);
    navigate("/login");
  };

  const profileClickHandler = () => {
    setIsProfileClicked(!isProfileClicked);
    if (isProfileClicked === true) {
      setIsOpen(!isOpen)
    }
  };

  return (
    <nav className="relative drop-shadow-md flex justify-between items-center px-6 py-4 z-10">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-2xl text-gray-800">MK | Minimal Kerja</h1>
        </Link>
        <div className="sm:hidden menu-icon" onClick={clickHandler}>
          <i className={isOpen ? "fa fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
      <ul className={`nav-items ${isOpen && "show"}`}>
        <li className="text-color hover:text-blue-600" onClick={clickHandler}>
          <Link to={"/job-vacancy"}>Cari Kerja</Link>
        </li>
        <li>
          {!isLogin ? (
            <Link
              to={"/login"}
              className="text-color hover:text-blue-600"
              onClick={clickHandler}
            >
              Login
            </Link>
          ) : (
            <div className="relative inline-block">
              <i
                className="fa-solid fa-user cursor-pointer"
                onClick={profileClickHandler}
              />
              <div
                className={`absolute z-10 right-0 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl drop-down ${
                  isProfileClicked ? "profile-show" : "profile-hidden"
                } `}
              >
                <Link
                  onClick={profileClickHandler}
                  to={"/dashboard"}
                  className="block px-4 py-3 text-base font-semibold text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100"
                >
                  {" "}
                  Dashboard{" "}
                </Link>
                <Link
                  onClick={profileClickHandler}
                  to={"/dashboard/profile"}
                  className="block px-4 py-3 text-base font-semibold text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100"
                >
                  {" "}
                  Profile{" "}
                </Link>

                <button
                  onClick={logoutHandler}
                  className="w-full block px-4 py-3 text-base font-bold text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100 "
                >
                  {" "}
                  Logout{" "}
                </button>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
