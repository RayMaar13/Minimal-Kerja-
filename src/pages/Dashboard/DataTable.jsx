import React, { useContext } from 'react'
import { StateContext } from "../../context/GlobalContext"
import SideDashboard from "./SideDashboard"
import "./DataTable.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Cookies from "js-cookie"

const DataTable = () => {
  const {state} = useContext(StateContext)
  const {data,setFetchStatus, setCurrentId} = state
  const navigate = useNavigate()

  const handlerDelete = (event) => {
    let idData = parseInt(event.target.value)
    axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
    .then((res) => {
      setFetchStatus(true)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handlerEdit = (event) => {
    let idData = parseInt(event.target.value)
    setCurrentId(idData)
    navigate(`/dashboard/list-job-vacancy/edit/${idData}`)
  }

  return (
    <div className=" flex">
      <SideDashboard />
      <section className="mx-auto items-center">
      <div className="mt-10">
        <h1 className="text-xl font-bold md:text-center text-left ml-3 md:ml-0">Manage Data</h1>
      </div>
      <div className="table-data mx-auto mt-10 overflow-x-auto shadow-md ">
        <table className="w-full text-left text-sm text-gray-500 scroll-mb-30">
          <thead className="text-xs uppercase text-white bg-sky-700">
            <tr>
              <th className="px-6 py-3">NO</th>
              <th className="px-6 py-3">ACTION</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Company Name</th>
              <th className="px-6 py-3">Company City</th>
              <th className="px-6 py-3">Job Description</th>
              <th className="px-6 py-3">Qualification</th>
              <th className="px-6 py-3">Job Type</th>
              <th className="px-6 py-3">Tenure</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Salary Min</th>
              <th className="px-6 py-3">Salary Max</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data !== null &&
              data.map((res, index) => {
                return (
                  <tr
                    key={res.id}
                    className="bg-white"
                  >
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td>
                    <button
                      onClick={handlerEdit}
                      className="px-4 py-1.5 bg-blue-600 rounded-lg m-1 text-white"
                      value={res.id}
                    >
                      Edit
                    </button>
                    <button
                      onClick={handlerDelete}
                      className="px-4 py-1.5  bg-red-600 rounded-lg m-1 text-white"
                      value={res.id}
                    >
                      Delete
                    </button>
                    </td>
                    
                    <td className="px-6 py-4">{res.title}</td>
                    <td className="px-6 py-4">{res.company_name}</td>
                    <td className="px-6 py-4">{res.company_city}</td>
                    <td className="v">{res.job_description?.substring(0, 10)}</td>
                    <td className="v">{res.job_qualification?.substring(0, 10)}</td>
                    <td className="px-6 py-4">{res.job_type}</td>
                    <td className="px-6 py-4">{res.job_tenure}</td>
                    <td className="px-6 py-4">{res.job_status === 1 ? "Open" : "Close"}</td>
                    <td className="px-6 py-4">{res.salary_min}</td>
                    <td className="px-6 py-4">{res.salary_max}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className=" mx-5 my-10">
        <h1 className="text-xl mb-3">Create New Data!</h1>
        <Link to={"/dashboard/list-job-vacancy/form"} className="bg-blue-500 rounded-lg m-1 text-white text-center px-8 py-1.5 hover:bg-blue-700 duration-300 ">Create</Link>
      </div>
    </section>
    </div>
  )
}

export default DataTable