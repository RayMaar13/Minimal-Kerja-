import React from "react";
import { useContext } from "react";
import { StateContext } from "../context/GlobalContext";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { handler, state } = useContext(StateContext);
  const { rupiah } = handler;
  const { setCurrentJobId } = state;
  const navigate = useNavigate();

  const handlerCard = (event) => {
    let jobId = parseInt(event.currentTarget.value)
    setCurrentJobId(jobId)
    navigate(`/job-vacancy/${jobId}`)
  }
  return (
    <button
    className="w-fit h-fit"
    onClick={handlerCard}
    value={props.id}
  >
    <div
      className="card border border-x-gray-300 border-solid flex flex-col gap-2   px-4 py-5 cursor-pointer"
    >
      <div className="company flex gap-3">
        <div className="logo_company">
          <img src={props.image} alt="logo company" />
        </div>
        <div className="logo_company-title text-left">
          <h1>{props.title}</h1>
          <p>{props.companyName}</p>
        </div>
      </div>
      <div className="description_company">
        <div className="flex font-awesome">
          <i className="fa-sharp fa-solid fa-location-dot"></i>
          <h3>{props.companyCity}</h3>
        </div>
        <div className="flex font-awesome">
          <i className="fa-solid fa-dollar-sign"></i>
          <h3>
            {rupiah(props.salaryMin)} - {rupiah(props.salaryMax)}
          </h3>
        </div>
        <div className="flex font-awesome">
          <i className="fa-solid fa-briefcase"></i>
          <h3>{props.jobTenure}</h3>
        </div>
      </div>
    </div>
  </button>
    
  );
};

export default Card;
