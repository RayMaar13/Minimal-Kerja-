import React, { useContext } from "react";
import { StateContext } from "../context/GlobalContext";
import "./SideBar.css";

const SideBar = (props) => {
  const { state, handler } = useContext(StateContext);


  const { search, setFetchStatus, setSearch, isOpenFilter, setIsOpenFilter} = state;
  const { onChangeFilter, searchHandler } = handler;

  const showFilterHandler = () => {
    setIsOpenFilter(!isOpenFilter)
  }

  const clearButtonHandler = () => {
    setFetchStatus(true)
    setIsOpenFilter(!isOpenFilter)
    setSearch({
      salary_min: 0,
      salary_max: 0,
      search: "",
      company_city: "",
    })
  }

  return (
    <div className="flex flex-col w-fit h-screen px-4 py-8 bg-white border-r filter side-bar sm:inline-block" >
      <div className="sm:items-center block md:hidden border-2 shadow border-solid border-gray-200 rounded-md sm:text-center filter-button " onClick={showFilterHandler}>
        <svg
          className="w-5 h-5 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 2"
          viewBox="0 0 30 30"
        >
          <path
            fill="#111224"
            d="M17 11H4A1 1 0 0 1 4 9H17A1 1 0 0 1 17 11zM26 11H22a1 1 0 0 1 0-2h4A1 1 0 0 1 26 11z"
          />
          <path
            fill="#111224"
            d="M19.5 13.5A3.5 3.5 0 1 1 23 10 3.5 3.5 0 0 1 19.5 13.5zm0-5A1.5 1.5 0 1 0 21 10 1.5 1.5 0 0 0 19.5 8.5zM26 21H13a1 1 0 0 1 0-2H26A1 1 0 0 1 26 21zM8 21H4a1 1 0 0 1 0-2H8A1 1 0 0 1 8 21z"
          />
          <path
            fill="#111224"
            d="M10.5,23.5A3.5,3.5,0,1,1,14,20,3.5,3.5,0,0,1,10.5,23.5Zm0-5A1.5,1.5,0,1,0,12,20,1.5,1.5,0,0,0,10.5,18.5Z"
          />
        </svg>
        <span>Filter</span>
      </div>
      <div className={`${isOpenFilter && "show-filter ms:shadow-md"} hidden sm:block`}>
        <h2 className="text-2xl font-semibold text-gray-800 sidebar-title">
          Filter Pencarianmu!
        </h2>
        <form onSubmit={searchHandler}>
        <div className="relative mt-6 ">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            value={search.search}
            onChange={onChangeFilter}
            name="search"
            minLength={1}
            type="text"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-col gap-4 flex-1 mt-6">
          <label htmlFor="company_city">Kota</label>
          <input
            defaultValue={search.company_city}
            onChange={onChangeFilter}
            name="company_city"
            id="company_city"
            type="text"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            placeholder="Company City"
          />
          <label htmlFor="salary_min">Minimal Gaji</label>
          <input
            defaultValue={search.salary_min}
            onChange={onChangeFilter}
            name="salary_min"
            id="salary_min"
            type="number"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            placeholder="Salary Min"
          />
          <label htmlFor="salary_max">Maksimal Gaji</label>
          <input
            defaultValue={search.salary_max}
            onChange={onChangeFilter}
            name="salary_max"
            id="salary_max"
            type="number"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            placeholder="Salary Max"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 rounded-lg py-1 px-4 w-20 mt-7 text-gray-800">Search</button>
        </form>
        <button className="bg-red-500 hover:bg-red-600 rounded-lg py-1 px-4 w-20 mt-7 text-white" onClick={clearButtonHandler}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default SideBar;
