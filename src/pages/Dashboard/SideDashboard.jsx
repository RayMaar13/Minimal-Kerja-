import React, { } from 'react'
import { Link } from "react-router-dom"
import Cookies from "js-cookie"


const SideDashboard = () => {
  const imageUser = Cookies.get('user.image_url')
  const nameUser = Cookies.get('user.name')
  const emailUser = Cookies.get('user.email')

  return (
    <div className="flex flex-col md:w-64 h-screen px-4 py-8 bg-white border-r w-20">
      <h2 className="text-3xl font-semibold text-center text-gray-800">
        MK
      </h2>
      <div className="flex flex-col items-center mt-6 -mx-2">
        <img
          className="object-cover w-24 h-24 mx-2 rounded-full md:block hidden"
          src={imageUser ? imageUser : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"}
          alt="avatar"
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 md:block hidden">
          {nameUser}
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 md:block hidden">
          {emailUser}
        </p>
      </div>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <div>
          <Link
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
            to={"/dashboard"}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mx-4 font-medium md:block hidden">Dashboard</span>
          </Link>
          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
            to={"/dashboard/profile"}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mx-4 font-medium md:block hidden">Profile</span>
          </Link>
          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 hover:text-gray-700"
            to={"/dashboard/list-job-vacancy"}
          >
            <i className="fa-solid fa-database w-5"></i>
            <span className="mx-4 font-medium md:block hidden">Table Data</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideDashboard