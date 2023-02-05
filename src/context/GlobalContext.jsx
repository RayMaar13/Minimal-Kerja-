import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = (props) => {
  const [data, setData] = useState(null);
  //Check is login
  const [isLogin, setIsLogin] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  //Check Job is open
  const [isJobOpen, setIsJobOpen] = useState(true);
  //Chek Id Data
  const [currentId, setCurrentId] = useState(-1);
  const [currentJobId, setCurrentJobId] = useState(-1);
  //Check open filter 
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  //Create data
  const [createData, setCreateData] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 0,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });

  //Login Input
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  //Value Search
  const [search, setSearch] = useState({
    salary_min: 0,
    salary_max: 0,
    search: "",
    company_city: "",
  });

  const navigate = useNavigate();

  //Conditional Login
  const token = Cookies.get("token");
  useEffect(() => {
    if (token) {
      setIsLogin(true);
    } else if (!token) {
      setIsLogin(false);
    }
  }, [token]);

  //Get Data
  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          setData([...res.data.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setFetchStatus(false);
  }, [fetchStatus, setFetchStatus]);

  //Login Change Handler
  const loginHandlerChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    if (name === "email") {
      setLoginInput({ ...loginInput, email: value });
    } else if (name === "password") {
      setLoginInput({ ...loginInput, password: value });
    }
  };

  //get Value Search
  const onChangeFilter = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSearch({ ...search, [name]: value });
    if (!search.search && !search.salary_min && !search.salary_max && !search.company_city) {
      setFetchStatus(true);
    }
  };

  //Search Handler
  const searchHandler = (event) => {
    event.preventDefault();
  
      const filteredDataTitle = (array) => {
          return array.filter((res) => {
            const title = res.title.toLowerCase();
            return title.includes(search.search.toLowerCase());
          })
      };
      
      const filteredDataMinSalary = (array) => {
          return array.filter((res) => {
            const minSalary = res.salary_min;
            return minSalary >= search.salary_min;
          })
      };

      const filteredDataMaxSalary = (array) => {
        return array.filter((res) => {
          const salary_max = res.salary_max;
          return salary_max <= search.salary_max;
        })
      };

      const filteredCompanyCity = (array) => {
        return array.filter((res) => {
          const companyName = res.company_city.toLowerCase();
          return companyName.includes(search.company_city.toLowerCase());
        })
      };

      let result = data;
      result = filteredDataTitle(result);
      if(search.salary_min > 0){
        result = filteredDataMinSalary(result);
      }
      if(search.salary_max > 0){
        result = filteredDataMaxSalary(result);;
      }
      if (search.company_city !== "") {
        result = filteredCompanyCity(result)
      }
      setIsOpenFilter(!isOpenFilter)
      setData(result);
  };
  //Data Change
  const dataChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setCreateData({
      ...createData,
      [name]: value,
    });
  };

  //Submit Data
  const submitDataHandler = (event) => {
    event.preventDefault();

    const {
      title,
      job_description,
      job_qualification,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    } = createData;

    if (currentId === -1) {
      //Create Data
      axios
        .post(
          `https://dev-example.sanbercloud.com/api/job-vacancy `,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          navigate("/dashboard/list-job-vacancy");
          setFetchStatus(true);
        })
        .catch((err) => {
          console.log(err);
        });
      setFetchStatus(true);
    } else {
      //Update Data
      axios.put(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
        {
          title,
          job_description,
          job_qualification,
          job_type,
          job_tenure,
          job_status,
          company_name,
          company_image_url,
          company_city,
          salary_min,
          salary_max,
        },
        { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      )
      .then((res) => {
        setFetchStatus(true);
        navigate("/dashboard/list-job-vacancy");
      })
    }
    setCreateData({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: 0,
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: 0,
      salary_max: 0,
    });
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const jobChangeHandler = (event) => {
    setIsJobOpen(!isJobOpen);
    if (isJobOpen === true) {
      setCreateData({ ...createData, job_status: 1 });
    } else {
      setCreateData({ ...createData, job_status: 0 });
    }
  };

  const state = {
    data,
    setData,
    search,
    setSearch,
    isLogin,
    setIsLogin,
    loginInput,
    setLoginInput,
    fetchStatus,
    setFetchStatus,
    createData,
    setCreateData,
    currentId,
    setCurrentId,
    currentJobId,
    setCurrentJobId,
    isOpenFilter, 
    setIsOpenFilter
  };

  const handler = {
    onChangeFilter,
    loginHandlerChange,
    jobChangeHandler,
    dataChangeHandler,
    submitDataHandler,
    searchHandler,
    rupiah,
  };
  return (
    <StateContext.Provider value={{ state, handler }}>
      {props.children}
    </StateContext.Provider>
  );
};
