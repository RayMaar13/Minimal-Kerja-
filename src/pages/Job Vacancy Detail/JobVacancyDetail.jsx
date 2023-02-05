import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import { StateContext } from "../../context/GlobalContext";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./JobVacancyDetail.css";

const JobVacancyDetail = () => {
  const { handler } = useContext(StateContext);
  const { rupiah } = handler;
  const [dataDetail, setDataDetail] = useState(null);

  let { jobId } = useParams();

  useEffect(() => {
    if (jobId !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${jobId}`)
        .then((res) => {
          setDataDetail(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  if (dataDetail === null) {
    return (
      <div className="job-vacancy">
        <SideBar />
      <h1 className="text-2xl">Loading....</h1>
      </div>
      )
  } else {
    return (
      <div className="container job-vacancy ">
        <SideBar />
        <section className="container-detail py-16 lg:mx-10 mx-auto ">
          <div className="md:flex block">
            <img
              src={dataDetail.company_image_url}
              alt="company logo"
              className="w-52 h-52 object-fill rounded"
            />
            <div className="logo_company-title ml-5">
              <h1 className="text-2xl">{dataDetail.title}</h1>
              <div className="flex font-awesome mt-3">
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                <h3>{dataDetail.company_city}</h3>
              </div>
              <div className="flex font-awesome">
                <i className="fa-solid fa-dollar-sign"></i>
                <h3>
                  {rupiah(dataDetail.salary_min)} -{" "}
                  {rupiah(dataDetail.salary_max)}
                </h3>
              </div>
              <div className="flex font-awesome">
                <i className="fa-solid fa-briefcase"></i>
                <h3>{dataDetail.job_tenure}</h3>
              </div>
            </div>
          </div>
          <br />
          <div className="description_company mb-10 px-3 lg:px-0">
            <hr />
            <h1 className="text-base font-medium mt-7 mb-4">
              Job Description:
            </h1>
            <h4 className="job-detail-text px-4 mb-6">
              {dataDetail.job_description}
            </h4>
            <hr />
            <h1 className="text-base font-medium mt-7 mb-4">
              Job Qualification:
            </h1>
            <h4 className="job-detail-text px-4">
              {dataDetail.job_qualification}
            </h4>
          </div>
          <Link
            to={"/job-vacancy"}
            className="ml-3 bg-blue-500 hover:bg-blue-600 py-1 px-8 rounded-xl text-gray-200 transition-all text-center items-center"
          >
            Back
          </Link>
        </section>
      </div>
    );
  }
};

export default JobVacancyDetail;
