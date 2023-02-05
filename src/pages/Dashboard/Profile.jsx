import React from "react";
import SideDashboard from "./SideDashboard";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Profile = () => {
  const imageUser = Cookies.get('user.image_url')
  const nameUser = Cookies.get('user.name')
  const emailUser = Cookies.get('user.email')
  return (
    <div className="flex">
      <SideDashboard />
      <section className="container ">
      <div className="w-full max-w-sm rounded-lg mx-auto mt-16">
        <div className="flex flex-col items-center py-10">
          <img
            className="w-24 h-24 mb-3 rounded-full"
            src={imageUser}
            alt="avatar"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            {nameUser}
          </h5>
          <span className="text-sm text-gray-500">
            {emailUser}
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <Link
              to={"/dashboard/profile/changePassword"}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Change Password
            </Link>
            <Link
              to={'/dashboard/list-job-vacancy'}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 "
            >
              Create Data
            </Link>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Profile;
