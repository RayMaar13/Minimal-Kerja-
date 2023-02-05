import React, { useContext } from "react";
import { StateContext } from "../context/GlobalContext";
import Card from "./Card";
import "./TableHome.css"

const TableHome = () => {
  const {state,} = useContext(StateContext)

  const {
    data,
  } = state


  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 py-9 mx-auto gap-6 h-fit">
      {data !== null &&
        data.map((res, index) => {  
          return (
            <Card
              key={index}
              value={res.id}
              id={res.id}
              image={res.company_image_url}
              title={res.title}
              companyName={res.company_name}
              companyCity={res.company_city}
              salaryMin={res.salary_min}
              salaryMax={res.salary_max}
              jobTenure={res.job_tenure}
            />
          );
        })}
    </div>
  );
};

export default TableHome;
