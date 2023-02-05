import React from "react";
import SideDashboard from "./SideDashboard";
import Cookies from "js-cookie";

const Dashboard = () => {
  const imageUser = Cookies.get("user.image_url");
  const nameUser = Cookies.get("user.name");
  return (
    <div className="flex">
      <SideDashboard />
      <section className="flex flex-col items-center text-center shadow-md container mt-20">
          <div>
          <h1 className=" dashboard-text">WELCOME {nameUser.toUpperCase()}</h1>
          </div>
          <div className="text-center items-center inline-block mt-5 ">
            <img src={imageUser} alt="img_USER" className="w-20 h-20 object-cover rounded-full" />
          </div>
          <div className="items-center bottom-20 absolute">
            <h3>Welcome to Dashboard</h3>
            <p>have a good day!</p>
          </div>
      </section>
    </div>
  );
};

export default Dashboard;
