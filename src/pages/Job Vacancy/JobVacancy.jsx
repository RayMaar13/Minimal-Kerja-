import React from "react";
import SideBar from "../../components/SideBar";
import TableHome from "../../components/TableHome";
import "./JobVacancy.css"

const JobVacancy = () => {
  return (
    <div className="job-vacancy">
      <SideBar />
      <TableHome />
    </div>
  );
};

export default JobVacancy;
