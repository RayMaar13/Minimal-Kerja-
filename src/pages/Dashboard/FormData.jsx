import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../../context/GlobalContext";
import SideDashboard from "./SideDashboard";
import axios from "axios";

const FormData = () => {
  const {state, handler} = useContext(StateContext)
  
  const {isJobOpen,createData, setCreateData} = state
  const {submitDataHandler, dataChangeHandler,jobChangeHandler} = handler

  let {idData} = useParams()

  useEffect(() => {
    if (idData !== undefined) {
    axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
    .then((res) => {
      let data = res.data

      setCreateData({
    title: data.title,
    job_description: data.job_description,
    job_qualification: data.job_qualification,
    job_type: data.job_type,
    job_tenure: data.job_tenure,
    job_status: data.job_status,
    company_name: data.company_name,
    company_image_url: data.company_image_url,
    company_city: data.company_city,
    salary_min: data.salary_min,
    salary_max: data.salary_max,
      })
    })
    }
  }, [])
  
  return (
    <div className="container flex">
      <SideDashboard />
      <section className="container p-6 mx-auto bg-white rounded-md shadow">
        <h2 className="text-lg font-semibold text-gray-700 capita">
          Create New Data
        </h2>
        <form onSubmit={submitDataHandler}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label className="text-gray" htmlFor="title">
                Title
              </label>
              <input
                onChange={dataChangeHandler}
                value={createData.title}
                id="title"
                name="title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded- focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-" htmlFor="job_description">
                Job Description
              </label>
              <input
                onChange={dataChangeHandler}
                value={createData.job_description}
                id="job_description"
                name="job_description"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-m focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-" htmlFor="job_qualification">
                Job Qualification
              </label>
              <input
                onChange={dataChangeHandler}
                value={createData.job_qualification}
                id="job_qualification"
                name="job_qualification"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-m focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-70" htmlFor="job_type">
                Job Type
              </label>
              <input
                onChange={dataChangeHandler}
                value={createData.job_type}
                id="job_type"
                name="job_type"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray" htmlFor="job_tenure">
                Job Tenure
              </label>
              <input
                onChange={dataChangeHandler}
                value={createData.job_tenure}
                id="job_tenure"
                name="job_tenure"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded- focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-" htmlFor="company_name">
                Company Name
              </label>
              <input
                onChange={dataChangeHandler}
                value={createData.company_name}
                id="company_name"
                name="company_name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-m focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-70" htmlFor="company_image_url">
                Company Image url
              </label>
              <input
                onChange={dataChangeHandler}
                value={createData.company_image_url}
                id="company_image_url"
                name="company_image_url"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-" htmlFor="company_city">
                Company City
              </label>
              <input
                onChange={dataChangeHandler}
                value={createData.company_city}
                id="company_city"
                name="company_city"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-m focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-" htmlFor="salary_min">
                Salary Min
              </label>
              <input
                onChange={dataChangeHandler}
                value={createData.salary_min}
                id="salary_min"
                name="salary_min"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-m focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-70" htmlFor="salary_max">
                Salary Max
              </label>
              <input
                onChange={dataChangeHandler}
                value={createData.salary_max}
                id="salary_max"
                name="salary_max"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div className="mt-10 items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultValue={isJobOpen}
                  className="sr-only peer"
                  defaultChecked=""
                  onChange={jobChangeHandler}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-500" />
                <span className="ml-3 text-sm font-medium text-gray-900 ">
                  Is Open ?
                </span>
              </label>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-sky-400 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormData;
